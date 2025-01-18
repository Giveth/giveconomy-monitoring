import { ProcessorManager } from './processorBuilder/processorManager';

const main = async () => {
  const processManager = new ProcessorManager();
  processManager.initializeProcessors();
  await processManager.run();
};

main();
