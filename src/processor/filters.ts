import { EvmBatchProcessor } from '@subsquid/evm-processor';
import { Address, ChainConfig } from '../config/configuration';
import * as givAbi from '../abi/GIV';

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

  // for (const unipoolAddress of chainConfig.unipoolAddresses) {
  //   // Filter GIV Transfers to Unipool
  //   processor
  //     .addLog({
  //       address: [chainConfig.givTokenAddress],
  //       topic0: [tokenDistroAbi.events.Assign.topic],
  //       // Distributor is unipool
  //       topic2: [addressToTopic(unipoolAddress)],
  //     })
  //     .addLog({
  //       address: [unipoolAddress],
  //       topic0: [unipoolAbi.events.RewardAdded.topic],
  //     });
  // }

  return processor;
};
