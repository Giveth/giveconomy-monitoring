import { TypeormDatabase } from '@subsquid/typeorm-store';
import { processors } from './processor';
import { Chain } from './config/configuration';
import logger from './logger';
import { runProcessor } from './processor/processorRunner';

const runProcessors = async () => {
  for (const chain in processors) {
    const processor = processors[chain as Chain];

    const db = new TypeormDatabase({
      stateSchema: `processor_${chain}`,
    });
    if (!processor) {
      logger.error(`Processor for chain ${chain} not found`);
      continue;
    }

    runProcessor({
      processor,
      chain: chain as Chain,
      db,
    });
  }
};

runProcessors();
