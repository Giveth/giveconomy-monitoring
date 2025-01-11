import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { Address, ChainConfig } from '../config/configuration';
import { givAbi, tokenDistroAbi, unipoolAbi } from '../abi';

const addressToTopic = (address: Address): string => {
  const topic =
    '0x' + address.replace('x', '0').padStart(64, '0').toLowerCase();
  return topic;
};

export const addFilters = (
  processor: EvmBatchProcessor,
  chainConfig: ChainConfig,
): EvmBatchProcessor => {
  // Filter GIV Transfers to Token Distro
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

  return processor;
};
