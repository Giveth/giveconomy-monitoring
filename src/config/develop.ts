import { Configuration } from './configuration';

export const developConfiguration: Configuration = {
  chains: {
    // gnosis: {
    //   gateway: 'https://v2.archive.subsquid.io/network/gnosis-mainnet',
    //   rpc: process.env.RPC_GNOSIS_HTTP || 'https://rpc.gnosischain.com',
    //   fromBlock: 19731570, // deployment of token distro https://gnosisscan.io/tx/0xbd16a77c2ac441fe78e323b78302cb5c3dc1037d74d049a343d1cb364f30ff89
    //   tokenDistroAddress: '0xc0dbdca66a0636236fabe1b3c16b1bd4c84bb1e1',
    //   givTokenAddress: '0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75',
    //   unipoolAddresses: [
    //     // Garden GIVPower Unipool
    //     '0xd93d3bdba18ebcb3317a57119ea44ed2cf41c2f2',
    //   ],
    // },
    mainnet: {
      gateway: 'https://v2.archive.subsquid.io/network/ethereum-mainnet',
      rpc: process.env.RPC_ETH_HTTP || 'https://ethereum-rpc.publicnode.com',
      fromBlock: 13816800,
      tokenDistroAddress: '0x87de995f6744b75bbe0255a973081142adb61f4d',
      givTokenAddress: '0x900db999074d9277c5da2a43f252d74366230da0',
      unipoolAddresses: [
        '0xc0dbdca66a0636236fabe1b3c16b1bd4c84bb1e1', // BAL unipool
        '0x4b9efae862a1755f7cecb021856d467e86976755', // GIV Unipool
        '0xa4523d703f663615bd41606b46b58deb2f926d98', // Uni-v2 GIV/DAI Unipool
        '0xa4b727df6fd608d1835e3440288c73fb28c4ef16', // ICHI Unipool
      ],
    },
  },
};
