import { productionConfiguration } from './production';
import { developConfiguration } from './develop';
export type Chain = 'gnosis' | 'optimism' | 'mainnet' | 'polygon_zkevm';
// an ethereum address type as all lowercase
export type Address = Lowercase<`0x${string}`>;

export interface UnipoolConfig {
  name: string;
  address: Address;
}

export interface ChainConfig {
  gateway: string;
  rpc: string;
  fromBlock: number;
  explorerUrl: string;

  tokenDistroAddress: Address;
  givTokenAddress: Address;
  unipools: UnipoolConfig[];

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

export const getChainExplorerUrl = (chain: Chain) => {
  let url = configuration.chains[chain]?.explorerUrl;

  // remove the last slash
  if (url && url[url.length - 1] === '/') {
    url = url.slice(0, -1);
  }

  return url;
};

export { configuration };
