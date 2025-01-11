import { givAbi } from '../../abi';
import { Chain, configuration } from '../../config/configuration';
import { EventProcessParams } from './types';

export const processGivToken = async ({
  chain,
  db,
  log,
  ctx,
}: EventProcessParams) => {
  const chainConfig = configuration.chains[chain as Chain]!;

  const { from, to, value } = givAbi.events.Transfer.decode(log);
  if (to === chainConfig.tokenDistroAddress) {
    ctx.log.info(`Transfer to tokenDistro: ${value}`);
  } else {
    ctx.log.error(`Unsupported transfer to address: ${to} on chain ${chain}`);
  }
};
