import { unipoolAbi } from '../../abi';
import { Address, Chain, configuration } from '../../config/configuration';
import { getUniPool } from '../../model/common';
import { checkUnipoolSanity } from '../sanityCheck';
import { EventProcessParams } from './types';

export const processUnipool = async (params: EventProcessParams) => {
  const { ctx, log, chain } = params;
  ctx.log.info(`Processing unipool event: ${chain}-${log.transaction?.hash}`);

  switch (log.topics[0]) {
    case unipoolAbi.events.RewardAdded.topic:
      return processRewardAddedEvent(params);
    default:
      ctx.log.error(`Unsupported unipool event ${log.topics[0]}`);
  }
};

const processRewardAddedEvent = async ({
  chain,
  ctx,
  log,
}: EventProcessParams) => {
  ctx.log.info(
    `Processing RewardAdded event: ${chain}-${log.transaction?.hash}`,
  );

  const chainConfig = configuration.chains[chain as Chain]!;
  const { unipoolAddresses } = chainConfig;

  const unipoolAddress = log.address.toLocaleLowerCase() as Address;
  if (!unipoolAddresses.includes(unipoolAddress)) {
    ctx.log.error(`Unknown unipool address: ${log.address} on chain ${chain}`);
    return;
  }

  const { reward } = unipoolAbi.events.RewardAdded.decode(log);

  const unipool = await getUniPool(
    { chain, address: unipoolAddress },
    ctx.store,
  );

  unipool.totalNotified += reward;
  await ctx.store.upsert(unipool);

  await checkUnipoolSanity({
    unipool,
    log,
    ctx,
  });
};
