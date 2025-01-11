import * as p from '@subsquid/evm-codec';
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi';
import type {
  EventParams as EParams,
  FunctionArguments,
  FunctionReturn,
} from '@subsquid/evm-abi';

export const events = {
  Approval: event(
    '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    'Approval(address,address,uint256)',
    {
      owner: indexed(p.address),
      spender: indexed(p.address),
      value: p.uint256,
    },
  ),
  AuthorizationUsed: event(
    '0x98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a5',
    'AuthorizationUsed(address,bytes32)',
    { authorizer: indexed(p.address), nonce: indexed(p.bytes32) },
  ),
  ChangeMinter: event(
    '0xc87aeafc6e4ae6202adf4f08a76769119ae93cc129c0e0cbac08a118bc18e1ce',
    'ChangeMinter(address)',
    { minter: indexed(p.address) },
  ),
  Transfer: event(
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    'Transfer(address,address,uint256)',
    { from: indexed(p.address), to: indexed(p.address), value: p.uint256 },
  ),
};

export const functions = {
  EIP712DOMAIN_HASH: viewFun(
    '0xc473af33',
    'EIP712DOMAIN_HASH()',
    {},
    p.bytes32,
  ),
  NAME_HASH: viewFun('0x04622c2e', 'NAME_HASH()', {}, p.bytes32),
  PERMIT_TYPEHASH: viewFun('0x30adf81f', 'PERMIT_TYPEHASH()', {}, p.bytes32),
  TRANSFER_WITH_AUTHORIZATION_TYPEHASH: viewFun(
    '0xa0cc6a68',
    'TRANSFER_WITH_AUTHORIZATION_TYPEHASH()',
    {},
    p.bytes32,
  ),
  VERSION_HASH: viewFun('0x9e4e7318', 'VERSION_HASH()', {}, p.bytes32),
  allowance: viewFun(
    '0xdd62ed3e',
    'allowance(address,address)',
    { _0: p.address, _1: p.address },
    p.uint256,
  ),
  approve: fun(
    '0x095ea7b3',
    'approve(address,uint256)',
    { spender: p.address, value: p.uint256 },
    p.bool,
  ),
  authorizationState: viewFun(
    '0xe94a0102',
    'authorizationState(address,bytes32)',
    { _0: p.address, _1: p.bytes32 },
    p.bool,
  ),
  balanceOf: viewFun(
    '0x70a08231',
    'balanceOf(address)',
    { _0: p.address },
    p.uint256,
  ),
  burn: fun('0x42966c68', 'burn(uint256)', { value: p.uint256 }, p.bool),
  changeMinter: fun('0x2c4d4d18', 'changeMinter(address)', {
    newMinter: p.address,
  }),
  decimals: viewFun('0x313ce567', 'decimals()', {}, p.uint8),
  getChainId: viewFun('0x3408e470', 'getChainId()', {}, p.uint256),
  getDomainSeparator: viewFun(
    '0xed24911d',
    'getDomainSeparator()',
    {},
    p.bytes32,
  ),
  initialBalance: viewFun('0x18369a2a', 'initialBalance()', {}, p.uint256),
  mint: fun(
    '0x40c10f19',
    'mint(address,uint256)',
    { to: p.address, value: p.uint256 },
    p.bool,
  ),
  minter: viewFun('0x07546172', 'minter()', {}, p.address),
  name: viewFun('0x06fdde03', 'name()', {}, p.string),
  nonces: viewFun(
    '0x7ecebe00',
    'nonces(address)',
    { _0: p.address },
    p.uint256,
  ),
  permit: fun(
    '0xd505accf',
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)',
    {
      owner: p.address,
      spender: p.address,
      value: p.uint256,
      deadline: p.uint256,
      v: p.uint8,
      r: p.bytes32,
      s: p.bytes32,
    },
  ),
  symbol: viewFun('0x95d89b41', 'symbol()', {}, p.string),
  totalSupply: viewFun('0x18160ddd', 'totalSupply()', {}, p.uint256),
  transfer: fun(
    '0xa9059cbb',
    'transfer(address,uint256)',
    { to: p.address, value: p.uint256 },
    p.bool,
  ),
  transferFrom: fun(
    '0x23b872dd',
    'transferFrom(address,address,uint256)',
    { from: p.address, to: p.address, value: p.uint256 },
    p.bool,
  ),
  transferWithAuthorization: fun(
    '0xe3ee160e',
    'transferWithAuthorization(address,address,uint256,uint256,uint256,bytes32,uint8,bytes32,bytes32)',
    {
      from: p.address,
      to: p.address,
      value: p.uint256,
      validAfter: p.uint256,
      validBefore: p.uint256,
      nonce: p.bytes32,
      v: p.uint8,
      r: p.bytes32,
      s: p.bytes32,
    },
  ),
};

export class Contract extends ContractBase {
  EIP712DOMAIN_HASH() {
    return this.eth_call(functions.EIP712DOMAIN_HASH, {});
  }

  NAME_HASH() {
    return this.eth_call(functions.NAME_HASH, {});
  }

  PERMIT_TYPEHASH() {
    return this.eth_call(functions.PERMIT_TYPEHASH, {});
  }

  TRANSFER_WITH_AUTHORIZATION_TYPEHASH() {
    return this.eth_call(functions.TRANSFER_WITH_AUTHORIZATION_TYPEHASH, {});
  }

  VERSION_HASH() {
    return this.eth_call(functions.VERSION_HASH, {});
  }

  allowance(_0: AllowanceParams['_0'], _1: AllowanceParams['_1']) {
    return this.eth_call(functions.allowance, { _0, _1 });
  }

  authorizationState(
    _0: AuthorizationStateParams['_0'],
    _1: AuthorizationStateParams['_1'],
  ) {
    return this.eth_call(functions.authorizationState, { _0, _1 });
  }

  balanceOf(_0: BalanceOfParams['_0']) {
    return this.eth_call(functions.balanceOf, { _0 });
  }

  decimals() {
    return this.eth_call(functions.decimals, {});
  }

  getChainId() {
    return this.eth_call(functions.getChainId, {});
  }

  getDomainSeparator() {
    return this.eth_call(functions.getDomainSeparator, {});
  }

  initialBalance() {
    return this.eth_call(functions.initialBalance, {});
  }

  minter() {
    return this.eth_call(functions.minter, {});
  }

  name() {
    return this.eth_call(functions.name, {});
  }

  nonces(_0: NoncesParams['_0']) {
    return this.eth_call(functions.nonces, { _0 });
  }

  symbol() {
    return this.eth_call(functions.symbol, {});
  }

  totalSupply() {
    return this.eth_call(functions.totalSupply, {});
  }
}

/// Event types
export type ApprovalEventArgs = EParams<typeof events.Approval>;
export type AuthorizationUsedEventArgs = EParams<
  typeof events.AuthorizationUsed
>;
export type ChangeMinterEventArgs = EParams<typeof events.ChangeMinter>;
export type TransferEventArgs = EParams<typeof events.Transfer>;

/// Function types
export type EIP712DOMAIN_HASHParams = FunctionArguments<
  typeof functions.EIP712DOMAIN_HASH
>;
export type EIP712DOMAIN_HASHReturn = FunctionReturn<
  typeof functions.EIP712DOMAIN_HASH
>;

export type NAME_HASHParams = FunctionArguments<typeof functions.NAME_HASH>;
export type NAME_HASHReturn = FunctionReturn<typeof functions.NAME_HASH>;

export type PERMIT_TYPEHASHParams = FunctionArguments<
  typeof functions.PERMIT_TYPEHASH
>;
export type PERMIT_TYPEHASHReturn = FunctionReturn<
  typeof functions.PERMIT_TYPEHASH
>;

export type TRANSFER_WITH_AUTHORIZATION_TYPEHASHParams = FunctionArguments<
  typeof functions.TRANSFER_WITH_AUTHORIZATION_TYPEHASH
>;
export type TRANSFER_WITH_AUTHORIZATION_TYPEHASHReturn = FunctionReturn<
  typeof functions.TRANSFER_WITH_AUTHORIZATION_TYPEHASH
>;

export type VERSION_HASHParams = FunctionArguments<
  typeof functions.VERSION_HASH
>;
export type VERSION_HASHReturn = FunctionReturn<typeof functions.VERSION_HASH>;

export type AllowanceParams = FunctionArguments<typeof functions.allowance>;
export type AllowanceReturn = FunctionReturn<typeof functions.allowance>;

export type ApproveParams = FunctionArguments<typeof functions.approve>;
export type ApproveReturn = FunctionReturn<typeof functions.approve>;

export type AuthorizationStateParams = FunctionArguments<
  typeof functions.authorizationState
>;
export type AuthorizationStateReturn = FunctionReturn<
  typeof functions.authorizationState
>;

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>;
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>;

export type BurnParams = FunctionArguments<typeof functions.burn>;
export type BurnReturn = FunctionReturn<typeof functions.burn>;

export type ChangeMinterParams = FunctionArguments<
  typeof functions.changeMinter
>;
export type ChangeMinterReturn = FunctionReturn<typeof functions.changeMinter>;

export type DecimalsParams = FunctionArguments<typeof functions.decimals>;
export type DecimalsReturn = FunctionReturn<typeof functions.decimals>;

export type GetChainIdParams = FunctionArguments<typeof functions.getChainId>;
export type GetChainIdReturn = FunctionReturn<typeof functions.getChainId>;

export type GetDomainSeparatorParams = FunctionArguments<
  typeof functions.getDomainSeparator
>;
export type GetDomainSeparatorReturn = FunctionReturn<
  typeof functions.getDomainSeparator
>;

export type InitialBalanceParams = FunctionArguments<
  typeof functions.initialBalance
>;
export type InitialBalanceReturn = FunctionReturn<
  typeof functions.initialBalance
>;

export type MintParams = FunctionArguments<typeof functions.mint>;
export type MintReturn = FunctionReturn<typeof functions.mint>;

export type MinterParams = FunctionArguments<typeof functions.minter>;
export type MinterReturn = FunctionReturn<typeof functions.minter>;

export type NameParams = FunctionArguments<typeof functions.name>;
export type NameReturn = FunctionReturn<typeof functions.name>;

export type NoncesParams = FunctionArguments<typeof functions.nonces>;
export type NoncesReturn = FunctionReturn<typeof functions.nonces>;

export type PermitParams = FunctionArguments<typeof functions.permit>;
export type PermitReturn = FunctionReturn<typeof functions.permit>;

export type SymbolParams = FunctionArguments<typeof functions.symbol>;
export type SymbolReturn = FunctionReturn<typeof functions.symbol>;

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>;
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>;

export type TransferParams = FunctionArguments<typeof functions.transfer>;
export type TransferReturn = FunctionReturn<typeof functions.transfer>;

export type TransferFromParams = FunctionArguments<
  typeof functions.transferFrom
>;
export type TransferFromReturn = FunctionReturn<typeof functions.transferFrom>;

export type TransferWithAuthorizationParams = FunctionArguments<
  typeof functions.transferWithAuthorization
>;
export type TransferWithAuthorizationReturn = FunctionReturn<
  typeof functions.transferWithAuthorization
>;
