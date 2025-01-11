import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { Chain } from '../config/configuration';
import { configuration } from '../config/configuration';
import { addFilters } from './filters';
import logger from '../logger';

export const processors: Partial<Record<Chain, EvmBatchProcessor>> = {};

export const initializeProcessors = () => {
  logger.info('Initializing processors');

  const { chains } = configuration;

  // for key and values
  for (const key in chains) {
    logger.info(`Initializing processor for chain ${key}`);
    const chainConfig = chains[key as Chain]!;
    const processor = new EvmBatchProcessor()
      .setGateway(chainConfig.gateway)
      .setRpcEndpoint({
        url: chainConfig.rpc,
        rateLimit: chainConfig.ratelimit || 10,
      })
      .setBlockRange({
        from: chainConfig.fromBlock,
      })
      .setFinalityConfirmation(chainConfig.finalityConfirmation || 75);

    addFilters(processor, chainConfig);

    processors[key as Chain] = processor;
  }
};

initializeProcessors();
