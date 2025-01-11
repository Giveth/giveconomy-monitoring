import { givAbi } from '../../abi';
import { Chain, configuration } from '../../config/configuration';
import { getEntityId, getTokenDistro } from '../../model/common';
import { EventProcessParams } from './types';

export const processGivToken = async (params: EventProcessParams) => {
  const { log, ctx, chain } = params;
  ctx.log.info(`Processing GIV token event: ${chain}-${log.transaction?.hash}`);

  switch (log.topics[0]) {
    case givAbi.events.Transfer.topic:
      return processTransferEvent(params);

    default:
      ctx.log.error(`Unsupported GIV token event ${log.topics[0]}`);
  }
};

const processTransferEvent = async ({
  chain,
  log,
  ctx,
}: EventProcessParams) => {
  ctx.log.info(`Processing Transfer event: ${chain}-${log.transaction?.hash}`);
  const chainConfig = configuration.chains[chain as Chain]!;
  const { tokenDistroAddress } = chainConfig;

  const { to, value } = givAbi.events.Transfer.decode(log);

  if (to === tokenDistroAddress) {
    ctx.log.info(`Transfer to tokenDistro: ${value}`);
    const id = getEntityId({ chain, address: tokenDistroAddress });

    const tokenDistro = await getTokenDistro(
      { chain, address: tokenDistroAddress },
      ctx.store,
    );

    tokenDistro.totalGIVBalance += value;
    await ctx.store.upsert(tokenDistro);
  } else {
    ctx.log.error(`Unsupported transfer to address: ${to} on chain ${chain}`);
  }
};
