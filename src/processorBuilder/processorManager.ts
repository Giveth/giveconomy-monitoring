import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { Chain, configuration } from '../config/configuration';
import logger from '../logger';
import { addProcessorFilter } from './processorFilter';
import { runProcessor } from './processorRunner';

export class ProcessorManager {
  private processors: Partial<Record<Chain, EvmBatchProcessor>> = {};
  private _isInitialized = false;

  public initializeProcessors() {
    if (this._isInitialized) {
      return;
    }
    this._isInitialized = true;

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

      addProcessorFilter(processor, chainConfig);

      this.processors[key as Chain] = processor;
    }
  }

  async run() {
    for (const chain in this.processors) {
      const processor = this.processors[chain as Chain];

      if (!processor) {
        logger.error(`Processor for chain ${chain} not found`);
        continue;
      }

      runProcessor({
        processor,
        chain: chain as Chain,
      });
    }
  }
}
