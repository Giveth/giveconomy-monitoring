import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import {
  Address,
  Chain,
  ChainConfig,
  configuration,
} from '../config/configuration';
import {
  processTokenDistro,
  processGivToken,
  processUnipool,
} from './contractEventProcessor';

export const runProcessor = async ({
  processor,
  chain,
  db,
}: {
  processor: EvmBatchProcessor;
  chain: Chain;
  db: TypeormDatabase;
}) => {
  const chainConfig = configuration.chains[chain as Chain] as ChainConfig;

  processor.run(db, async (ctx) => {
    for (const block of ctx.blocks) {
      for (const log of block.logs) {
        const contractAddress = log.address.toLocaleLowerCase() as Address;
        switch (contractAddress) {
          case chainConfig.givTokenAddress:
            await processGivToken({ chain, log, ctx });
            break;
          case chainConfig.tokenDistroAddress:
            await processTokenDistro({ chain, log, ctx });
            break;

          default:
            if (
              chainConfig.unipools.some((u) => u.address === contractAddress)
            ) {
              await processUnipool({ chain, log, ctx });
            } else {
              ctx.log.error(
                `Unknown contract address: ${contractAddress} on chain ${chain}`,
              );
            }
            break;
        }
      }
    }
  });
};
