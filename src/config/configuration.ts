import { productionConfiguration } from './production';
import { developConfiguration } from './develop';
export type Chain = 'gnosis' | 'optimism' | 'mainnet' | 'polygon_zkevm';
// an ethereum address type as all lowercase
export type Address = Lowercase<`0x${string}`>;

export interface ChainConfig {
  gateway: string;
  rpc: string;
  fromBlock: number;

  tokenDistroAddress: Address;
  givTokenAddress: Address;
  unipoolAddresses: Address[];

  ratelimit?: number;
  finalityConfirmation?: number;
}

export interface Configuration {
  chains: Partial<Record<Chain, ChainConfig>>;
}

const configuration =
  process.env.NODE_ENV === 'production'
    ? productionConfiguration
    : developConfiguration;

export { configuration };
