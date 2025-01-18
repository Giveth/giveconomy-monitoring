import { Configuration } from './configuration';

export const productionConfiguration: Configuration = {
  chains: {
    // mainnet: {
    //   gateway: 'https://v2.archive.subsquid.io/network/ethereum-mainnet',
    //   rpc: process.env.RPC_ETH_HTTP || 'https://ethereum-rpc.publicnode.com',
    //   explorerUrl: 'https://etherscan.io',
    //   fromBlock: 13816800,
    //   tokenDistroAddress: '0x87de995f6744b75bbe0255a973081142adb61f4d',
    //   givTokenAddress: '0x900db999074d9277c5da2a43f252d74366230da0',
    //   unipools: [
    //     {
    //       address: '0xc0dbdca66a0636236fabe1b3c16b1bd4c84bb1e1',
    //       name: 'Balancer unipool',
    //     },
    //     {
    //       address: '0x4b9efae862a1755f7cecb021856d467e86976755',
    //       name: 'GIV Unipool',
    //     },
    //     {
    //       address: '0xa4523d703f663615bd41606b46b58deb2f926d98',
    //       name: 'Uni-v2 GIV/DAI Unipool',
    //     },
    //     {
    //       address: '0xa4b727df6fd608d1835e3440288c73fb28c4ef16',
    //       name: 'ICHI Unipool',
    //     },
    //   ],
    // },
    // gnosis: {
    //   gateway: 'https://v2.archive.subsquid.io/network/gnosis-mainnet',
    //   rpc: process.env.RPC_GNOSIS_HTTP || 'https://rpc.gnosischain.com',
    //   explorerUrl: 'https://gnosisscan.io',
    //   fromBlock: 19731570, // deployment of token distro https://gnosisscan.io/tx/0xbd16a77c2ac441fe78e323b78302cb5c3dc1037d74d049a343d1cb364f30ff89
    //   tokenDistroAddress: '0xc0dbdca66a0636236fabe1b3c16b1bd4c84bb1e1',
    //   givTokenAddress: '0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75',
    //   unipools: [
    //     {
    //       name: 'Garden GIVPower Unipool',
    //       address: '0xd93d3bdba18ebcb3317a57119ea44ed2cf41c2f2',
    //     },
    //     {
    //       name: 'HNY/GIV Unipool',
    //       address: '0x4b9efae862a1755f7cecb021856d467e86976755',
    //     },
    //     {
    //       name: 'ETH/GIV Unipool',
    //       address: '0xfb429010c1e9d08b7347f968a7d88f0207807ef0',
    //     },
    //     {
    //       name: 'GIV/DAI Unipool',
    //       address: '0x24a6067fed46dc8663794c4d39ec91b074cf85d4',
    //     },
    //   ],
    // },
    // optimism: {
    //   gateway: 'https://v2.archive.subsquid.io/network/optimism-mainnet',
    //   rpc: process.env.RPC_OP_MAINNET_HTTP || 'https://mainnet.optimism.io',
    //   explorerUrl: 'https://optimistic.etherscan.io',
    //   fromBlock: 108004007,
    //   tokenDistroAddress: '0xe3ac7b3e6b4065f4765d76fdc215606483bf3bd1',
    //   givTokenAddress: '0x528cdc92eab044e1e39fe43b9514bfdab4412b98',
    //   unipools: [
    //     {
    //       name: 'GIVPower Unipool',
    //       address: '0x301c739cf6bfb6b47a74878bdeb13f92f13ae5e7',
    //     },
    //   ],
    //   bots: [
    //     {
    //       name: 'OP GIVPower Bot',
    //       address: '0x4ddc12737b28b0413539c4b044f0c10abd85c07c',
    //     },
    //   ],
    //   botMinBalance: 0.005,
    // },
    polygon_zkevm: {
      gateway: 'https://v2.archive.subsquid.io/network/polygon-zkevm-mainnet',
      rpc: process.env.RPC_POLYGON_ZKEVM_HTTP || 'https://zkevm-rpc.com',
      explorerUrl: 'https://zkevm.polygonscan.com',
      fromBlock: 15130401,
      tokenDistroAddress: '0x4fb9b10ecde1b048dbc79abeab3793edc93a0d54',
      givTokenAddress: '0xddafb91475bbf6210a151fa911ac8fda7de46ec2',
      unipools: [
        {
          name: 'GIVPower Unipool',
          address: '0xc790f82bf6f8709aa4a56dc11afad7af7c2a9867',
        },
      ],
      bots: [
        {
          name: 'GIVPower Bot',
          address: '0x7ff3853f98497eb3fadbf83eb9756e18e476a40b',
        },
      ],
      botMinBalance: 0.005,
    },
  },
};
