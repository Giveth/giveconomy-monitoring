import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { givAbi, tokenDistroAbi, unipoolAbi } from '../abi';
import { Address, ChainConfig } from '../config/configuration';

export const addProcessorFilter = (
  processor: EvmBatchProcessor,
  chainConfig: ChainConfig,
): EvmBatchProcessor => {
  processor.addLog({
    address: [chainConfig.givTokenAddress],
    topic0: [givAbi.events.Transfer.topic],
    // Transfer to Token Distro
    topic2: [addressToTopic(chainConfig.tokenDistroAddress)],
    transaction: true,
  });

  for (const { address: unipoolAddress } of chainConfig.unipools) {
    // Filter GIV Transfers to Unipool
    processor
      .addLog({
        address: [chainConfig.tokenDistroAddress],
        topic0: [tokenDistroAbi.events.Assign.topic],
        // Distributor is unipool
        topic2: [addressToTopic(unipoolAddress)],
        transaction: true,
      })
      .addLog({
        address: [unipoolAddress],
        topic0: [unipoolAbi.events.RewardAdded.topic],
        transaction: true,
      });
  }
  for (const { address: botAddress } of chainConfig?.bots || []) {
    processor.addTransaction({
      from: [botAddress],
    });
  }

  return processor;
};

const addressToTopic = (address: Address): string => {
  const topic =
    '0x' + address.replace('x', '0').padStart(64, '0').toLowerCase();
  return topic;
};
