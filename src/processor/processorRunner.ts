import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { TypeormDatabase } from '@subsquid/typeorm-store';
import { Address, Chain, configuration } from '../config/configuration';
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
  const chainConfig = configuration.chains[chain as Chain]!;

  processor.run(db, async (ctx) => {
    for (const block of ctx.blocks) {
      for (const log of block.logs) {
        const contractAddress = log.address.toLocaleLowerCase() as Address;
        switch (contractAddress) {
          case chainConfig.givTokenAddress:
            processGivToken({ chain, db, log, ctx });
            break;
          case chainConfig.tokenDistroAddress:
            processTokenDistro({ chain, db, log, ctx });
            break;

          default:
            if (chainConfig.unipoolAddresses.includes(contractAddress)) {
              processUnipool({ chain, db, log, ctx });
            } else {
              ctx.log.error(
                `Unknown contract address: ${contractAddress} on chain ${chain}`,
              );
            }
            break;
        }

        // let { from, to, value } = usdtAbi.events.Transfer.decode(log);
        // transfers.push(
        //   new Transfer({
        //     id: log.id,
        //     from,
        //     to,
        //     value,
        //   })
        // );
      }
    }
    // await ctx.store.insert(transfers);
  });
};
