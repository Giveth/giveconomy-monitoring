import { tokenDistroAbi } from '../../abi';
import { Address, Chain, configuration } from '../../config/configuration';
import { getTokenDistro, getUniPool } from '../../model/common';
import { checkTokenDistroSanity } from '../sanityCheck';
import { EventProcessParams } from './types';

export const processTokenDistro = async (params: EventProcessParams) => {
  const { ctx, log, chain } = params;
  ctx.log.info(
    `Processing TokenDistro event: ${chain}-${log.transaction?.hash}`,
  );

  switch (log.topics[0]) {
    case tokenDistroAbi.events.Assign.topic:
      return processAssignEvent(params);

    default:
      ctx.log.error(`Unsupported TokenDistro event ${log.topics[0]}`);
  }
};

const processAssignEvent = async ({ chain, ctx, log }: EventProcessParams) => {
  ctx.log.info(`Processing Assign event: ${chain}-${log.transaction?.hash}`);

  const chainConfig = configuration.chains[chain as Chain]!;
  const { tokenDistroAddress } = chainConfig;

  const { distributor, amount } = tokenDistroAbi.events.Assign.decode(log);
  const unipoolAddresses = distributor.toLocaleLowerCase() as Address;

  const unipoolConfig = chainConfig.unipools.find(
    (u) => u.address === unipoolAddresses,
  );
  if (!unipoolConfig) {
    ctx.log.error(
      `Unknown distributor address: ${distributor} on chain ${chain}`,
    );
    return;
  }

  const tokenDistro = await getTokenDistro(
    { chain, address: tokenDistroAddress },
    ctx.store,
  );
  tokenDistro.totalAssigned += amount;
  await ctx.store.upsert(tokenDistro);

  const unipool = await getUniPool(
    { chain, address: unipoolAddresses },
    ctx.store,
  );

  unipool.totalAssignedTo += amount;
  await ctx.store.upsert(unipool);

  ctx.log.info(`Updated unipool "${unipoolConfig.name}" total assigned to.
    Chain: ${chain}
    Added amount: ${amount}
    New total assigned to: ${unipool.totalAssignedTo}`);

  checkTokenDistroSanity({
    tokenDistro,
    log,
    ctx,
  });
};
