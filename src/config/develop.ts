import { Configuration } from './configuration';

export const developConfiguration: Configuration = {
  chains: {
    ['gnosis']: {
      gateway: 'https://v2.archive.subsquid.io/network/gnosis-mainnet',
      rpc: process.env.RPC_GNOSIS_HTTP || 'https://rpc.gnosischain.com',
      fromBlock: 19731570, // deployment of token distro https://gnosisscan.io/tx/0xbd16a77c2ac441fe78e323b78302cb5c3dc1037d74d049a343d1cb364f30ff89
      tokenDistroAddress: '0xc0dbdca66a0636236fabe1b3c16b1bd4c84bb1e1',
      givTokenAddress: '0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75',
      unipoolAddresses: [
        // Garden GIVPower Unipool
        '0xd93d3bdba18ebcb3317a57119ea44ed2cf41c2f2',
      ],
    },
  },
};
