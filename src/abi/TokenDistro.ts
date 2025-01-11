import * as p from '@subsquid/evm-codec';
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi';
import type {
  EventParams as EParams,
  FunctionArguments,
  FunctionReturn,
} from '@subsquid/evm-abi';

export const events = {
  Allocate: event(
    '0x5168bfb88d6125d4580e2b91ecb103a730312c3e8b0be9c4031a0fc794e2cd5f',
    'Allocate(address,address,uint256)',
    {
      distributor: indexed(p.address),
      grantee: indexed(p.address),
      amount: p.uint256,
    },
  ),
  Assign: event(
    '0x007ae6a979e5d8177867f7c1ca4be1527487a2e43a444b55c3dfaee02c423544',
    'Assign(address,address,uint256)',
    {
      admin: indexed(p.address),
      distributor: indexed(p.address),
      amount: p.uint256,
    },
  ),
  ChangeAddress: event(
    '0x8839b4e99cbac9b99de60313e9f1679f46d6837a692b8c052bf0bd6cacb19c79',
    'ChangeAddress(address,address)',
    { oldAddress: indexed(p.address), newAddress: indexed(p.address) },
  ),
  Claim: event(
    '0x47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4',
    'Claim(address,uint256)',
    { grantee: indexed(p.address), amount: p.uint256 },
  ),
  DurationChanged: event(
    '0x9bb10695bde7db94333a5404f0767118f3965fd73217e45f96529c3d368285af',
    'DurationChanged(uint256)',
    { newDuration: p.uint256 },
  ),
  GivBackPaid: event(
    '0x501554fe9eb720f094fa1c09c71f38933a18b834045c8afd91a329cf38021d1c',
    'GivBackPaid(address)',
    { distributor: p.address },
  ),
  Initialized: event(
    '0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498',
    'Initialized(uint8)',
    { version: p.uint8 },
  ),
  PraiseRewardPaid: event(
    '0xba378556e3a218f9dc0332f520ed51981c0e0eb43bf8302f9559fdfe9d538181',
    'PraiseRewardPaid(address)',
    { distributor: p.address },
  ),
  RoleAdminChanged: event(
    '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff',
    'RoleAdminChanged(bytes32,bytes32,bytes32)',
    {
      role: indexed(p.bytes32),
      previousAdminRole: indexed(p.bytes32),
      newAdminRole: indexed(p.bytes32),
    },
  ),
  RoleGranted: event(
    '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d',
    'RoleGranted(bytes32,address,address)',
    {
      role: indexed(p.bytes32),
      account: indexed(p.address),
      sender: indexed(p.address),
    },
  ),
  RoleRevoked: event(
    '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b',
    'RoleRevoked(bytes32,address,address)',
    {
      role: indexed(p.bytes32),
      account: indexed(p.address),
      sender: indexed(p.address),
    },
  ),
  StartTimeChanged: event(
    '0xbefe8e3983c0dc663c4ba451fc82d4ff7eb2e4ccc4b944874abea1ecc841feae',
    'StartTimeChanged(uint256,uint256)',
    { newStartTime: p.uint256, newCliffTime: p.uint256 },
  ),
};

export const functions = {
  DEFAULT_ADMIN_ROLE: viewFun(
    '0xa217fddf',
    'DEFAULT_ADMIN_ROLE()',
    {},
    p.bytes32,
  ),
  DISTRIBUTOR_ROLE: viewFun('0xf0bd87cc', 'DISTRIBUTOR_ROLE()', {}, p.bytes32),
  allocate: fun('0x6ca163de', 'allocate(address,uint256,bool)', {
    recipient: p.address,
    amount: p.uint256,
    claim: p.bool,
  }),
  allocateMany: fun('0x79328677', 'allocateMany(address[],uint256[])', {
    recipients: p.array(p.address),
    amounts: p.array(p.uint256),
  }),
  assign: fun('0xbe760488', 'assign(address,uint256)', {
    distributor: p.address,
    amount: p.uint256,
  }),
  balances: viewFun(
    '0x27e235e3',
    'balances(address)',
    { _0: p.address },
    { allocatedTokens: p.uint256, claimed: p.uint256 },
  ),
  cancelable: viewFun('0xeee56564', 'cancelable()', {}, p.bool),
  changeAddress: fun('0xfe64d6ff', 'changeAddress(address)', {
    newAddress: p.address,
  }),
  claim: fun('0x4e71d92d', 'claim()', {}),
  claimTo: fun('0xa262f5f8', 'claimTo(address)', { account: p.address }),
  claimableAt: viewFun(
    '0x5066c893',
    'claimableAt(address,uint256)',
    { recipient: p.address, timestamp: p.uint256 },
    p.uint256,
  ),
  claimableNow: viewFun(
    '0x9a78ea4a',
    'claimableNow(address)',
    { recipient: p.address },
    p.uint256,
  ),
  cliffTime: viewFun('0x0f1a6444', 'cliffTime()', {}, p.uint256),
  duration: viewFun('0x0fb5a6b4', 'duration()', {}, p.uint256),
  getRoleAdmin: viewFun(
    '0x248a9ca3',
    'getRoleAdmin(bytes32)',
    { role: p.bytes32 },
    p.bytes32,
  ),
  getRoleMember: viewFun(
    '0x9010d07c',
    'getRoleMember(bytes32,uint256)',
    { role: p.bytes32, index: p.uint256 },
    p.address,
  ),
  getRoleMemberCount: viewFun(
    '0xca15c873',
    'getRoleMemberCount(bytes32)',
    { role: p.bytes32 },
    p.uint256,
  ),
  getTimestamp: viewFun('0x188ec356', 'getTimestamp()', {}, p.uint256),
  globallyClaimableAt: viewFun(
    '0x6d8500db',
    'globallyClaimableAt(uint256)',
    { timestamp: p.uint256 },
    p.uint256,
  ),
  grantRole: fun('0x2f2ff15d', 'grantRole(bytes32,address)', {
    role: p.bytes32,
    account: p.address,
  }),
  hasRole: viewFun(
    '0x91d14854',
    'hasRole(bytes32,address)',
    { role: p.bytes32, account: p.address },
    p.bool,
  ),
  initialAmount: viewFun('0xfc1ed437', 'initialAmount()', {}, p.uint256),
  initialize: fun(
    '0xc7aaa8d4',
    'initialize(uint256,uint256,uint256,uint256,uint256,address,bool)',
    {
      _totalTokens: p.uint256,
      _startTime: p.uint256,
      _cliffPeriod: p.uint256,
      _duration: p.uint256,
      _initialPercentage: p.uint256,
      _token: p.address,
      _cancelable: p.bool,
    },
  ),
  lockedAmount: viewFun('0x6ab28bc8', 'lockedAmount()', {}, p.uint256),
  renounceRole: fun('0x36568abe', 'renounceRole(bytes32,address)', {
    role: p.bytes32,
    account: p.address,
  }),
  revokeRole: fun('0xd547741f', 'revokeRole(bytes32,address)', {
    role: p.bytes32,
    account: p.address,
  }),
  sendGIVbacks: fun('0x7effb533', 'sendGIVbacks(address[],uint256[])', {
    recipients: p.array(p.address),
    amounts: p.array(p.uint256),
  }),
  sendPraiseRewards: fun(
    '0x208c9327',
    'sendPraiseRewards(address[],uint256[])',
    { recipients: p.array(p.address), amounts: p.array(p.uint256) },
  ),
  setDuration: fun('0xf6be71d1', 'setDuration(uint256)', {
    newDuration: p.uint256,
  }),
  setStartTime: fun('0x3e0a322d', 'setStartTime(uint256)', {
    newStartTime: p.uint256,
  }),
  startTime: viewFun('0x78e97925', 'startTime()', {}, p.uint256),
  supportsInterface: viewFun(
    '0x01ffc9a7',
    'supportsInterface(bytes4)',
    { interfaceId: p.bytes4 },
    p.bool,
  ),
  token: viewFun('0xfc0c546a', 'token()', {}, p.address),
  totalTokens: viewFun('0x7e1c0c09', 'totalTokens()', {}, p.uint256),
  transferAllocation: fun('0x397f6121', 'transferAllocation(address,address)', {
    prevRecipient: p.address,
    newRecipient: p.address,
  }),
};

export class Contract extends ContractBase {
  DEFAULT_ADMIN_ROLE() {
    return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {});
  }

  DISTRIBUTOR_ROLE() {
    return this.eth_call(functions.DISTRIBUTOR_ROLE, {});
  }

  balances(_0: BalancesParams['_0']) {
    return this.eth_call(functions.balances, { _0 });
  }

  cancelable() {
    return this.eth_call(functions.cancelable, {});
  }

  claimableAt(
    recipient: ClaimableAtParams['recipient'],
    timestamp: ClaimableAtParams['timestamp'],
  ) {
    return this.eth_call(functions.claimableAt, { recipient, timestamp });
  }

  claimableNow(recipient: ClaimableNowParams['recipient']) {
    return this.eth_call(functions.claimableNow, { recipient });
  }

  cliffTime() {
    return this.eth_call(functions.cliffTime, {});
  }

  duration() {
    return this.eth_call(functions.duration, {});
  }

  getRoleAdmin(role: GetRoleAdminParams['role']) {
    return this.eth_call(functions.getRoleAdmin, { role });
  }

  getRoleMember(
    role: GetRoleMemberParams['role'],
    index: GetRoleMemberParams['index'],
  ) {
    return this.eth_call(functions.getRoleMember, { role, index });
  }

  getRoleMemberCount(role: GetRoleMemberCountParams['role']) {
    return this.eth_call(functions.getRoleMemberCount, { role });
  }

  getTimestamp() {
    return this.eth_call(functions.getTimestamp, {});
  }

  globallyClaimableAt(timestamp: GloballyClaimableAtParams['timestamp']) {
    return this.eth_call(functions.globallyClaimableAt, { timestamp });
  }

  hasRole(role: HasRoleParams['role'], account: HasRoleParams['account']) {
    return this.eth_call(functions.hasRole, { role, account });
  }

  initialAmount() {
    return this.eth_call(functions.initialAmount, {});
  }

  lockedAmount() {
    return this.eth_call(functions.lockedAmount, {});
  }

  startTime() {
    return this.eth_call(functions.startTime, {});
  }

  supportsInterface(interfaceId: SupportsInterfaceParams['interfaceId']) {
    return this.eth_call(functions.supportsInterface, { interfaceId });
  }

  token() {
    return this.eth_call(functions.token, {});
  }

  totalTokens() {
    return this.eth_call(functions.totalTokens, {});
  }
}

/// Event types
export type AllocateEventArgs = EParams<typeof events.Allocate>;
export type AssignEventArgs = EParams<typeof events.Assign>;
export type ChangeAddressEventArgs = EParams<typeof events.ChangeAddress>;
export type ClaimEventArgs = EParams<typeof events.Claim>;
export type DurationChangedEventArgs = EParams<typeof events.DurationChanged>;
export type GivBackPaidEventArgs = EParams<typeof events.GivBackPaid>;
export type InitializedEventArgs = EParams<typeof events.Initialized>;
export type PraiseRewardPaidEventArgs = EParams<typeof events.PraiseRewardPaid>;
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>;
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>;
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>;
export type StartTimeChangedEventArgs = EParams<typeof events.StartTimeChanged>;

/// Function types
export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<
  typeof functions.DEFAULT_ADMIN_ROLE
>;
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<
  typeof functions.DEFAULT_ADMIN_ROLE
>;

export type DISTRIBUTOR_ROLEParams = FunctionArguments<
  typeof functions.DISTRIBUTOR_ROLE
>;
export type DISTRIBUTOR_ROLEReturn = FunctionReturn<
  typeof functions.DISTRIBUTOR_ROLE
>;

export type AllocateParams = FunctionArguments<typeof functions.allocate>;
export type AllocateReturn = FunctionReturn<typeof functions.allocate>;

export type AllocateManyParams = FunctionArguments<
  typeof functions.allocateMany
>;
export type AllocateManyReturn = FunctionReturn<typeof functions.allocateMany>;

export type AssignParams = FunctionArguments<typeof functions.assign>;
export type AssignReturn = FunctionReturn<typeof functions.assign>;

export type BalancesParams = FunctionArguments<typeof functions.balances>;
export type BalancesReturn = FunctionReturn<typeof functions.balances>;

export type CancelableParams = FunctionArguments<typeof functions.cancelable>;
export type CancelableReturn = FunctionReturn<typeof functions.cancelable>;

export type ChangeAddressParams = FunctionArguments<
  typeof functions.changeAddress
>;
export type ChangeAddressReturn = FunctionReturn<
  typeof functions.changeAddress
>;

export type ClaimParams = FunctionArguments<typeof functions.claim>;
export type ClaimReturn = FunctionReturn<typeof functions.claim>;

export type ClaimToParams = FunctionArguments<typeof functions.claimTo>;
export type ClaimToReturn = FunctionReturn<typeof functions.claimTo>;

export type ClaimableAtParams = FunctionArguments<typeof functions.claimableAt>;
export type ClaimableAtReturn = FunctionReturn<typeof functions.claimableAt>;

export type ClaimableNowParams = FunctionArguments<
  typeof functions.claimableNow
>;
export type ClaimableNowReturn = FunctionReturn<typeof functions.claimableNow>;

export type CliffTimeParams = FunctionArguments<typeof functions.cliffTime>;
export type CliffTimeReturn = FunctionReturn<typeof functions.cliffTime>;

export type DurationParams = FunctionArguments<typeof functions.duration>;
export type DurationReturn = FunctionReturn<typeof functions.duration>;

export type GetRoleAdminParams = FunctionArguments<
  typeof functions.getRoleAdmin
>;
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>;

export type GetRoleMemberParams = FunctionArguments<
  typeof functions.getRoleMember
>;
export type GetRoleMemberReturn = FunctionReturn<
  typeof functions.getRoleMember
>;

export type GetRoleMemberCountParams = FunctionArguments<
  typeof functions.getRoleMemberCount
>;
export type GetRoleMemberCountReturn = FunctionReturn<
  typeof functions.getRoleMemberCount
>;

export type GetTimestampParams = FunctionArguments<
  typeof functions.getTimestamp
>;
export type GetTimestampReturn = FunctionReturn<typeof functions.getTimestamp>;

export type GloballyClaimableAtParams = FunctionArguments<
  typeof functions.globallyClaimableAt
>;
export type GloballyClaimableAtReturn = FunctionReturn<
  typeof functions.globallyClaimableAt
>;

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>;
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>;

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>;
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>;

export type InitialAmountParams = FunctionArguments<
  typeof functions.initialAmount
>;
export type InitialAmountReturn = FunctionReturn<
  typeof functions.initialAmount
>;

export type InitializeParams = FunctionArguments<typeof functions.initialize>;
export type InitializeReturn = FunctionReturn<typeof functions.initialize>;

export type LockedAmountParams = FunctionArguments<
  typeof functions.lockedAmount
>;
export type LockedAmountReturn = FunctionReturn<typeof functions.lockedAmount>;

export type RenounceRoleParams = FunctionArguments<
  typeof functions.renounceRole
>;
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>;

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>;
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>;

export type SendGIVbacksParams = FunctionArguments<
  typeof functions.sendGIVbacks
>;
export type SendGIVbacksReturn = FunctionReturn<typeof functions.sendGIVbacks>;

export type SendPraiseRewardsParams = FunctionArguments<
  typeof functions.sendPraiseRewards
>;
export type SendPraiseRewardsReturn = FunctionReturn<
  typeof functions.sendPraiseRewards
>;

export type SetDurationParams = FunctionArguments<typeof functions.setDuration>;
export type SetDurationReturn = FunctionReturn<typeof functions.setDuration>;

export type SetStartTimeParams = FunctionArguments<
  typeof functions.setStartTime
>;
export type SetStartTimeReturn = FunctionReturn<typeof functions.setStartTime>;

export type StartTimeParams = FunctionArguments<typeof functions.startTime>;
export type StartTimeReturn = FunctionReturn<typeof functions.startTime>;

export type SupportsInterfaceParams = FunctionArguments<
  typeof functions.supportsInterface
>;
export type SupportsInterfaceReturn = FunctionReturn<
  typeof functions.supportsInterface
>;

export type TokenParams = FunctionArguments<typeof functions.token>;
export type TokenReturn = FunctionReturn<typeof functions.token>;

export type TotalTokensParams = FunctionArguments<typeof functions.totalTokens>;
export type TotalTokensReturn = FunctionReturn<typeof functions.totalTokens>;

export type TransferAllocationParams = FunctionArguments<
  typeof functions.transferAllocation
>;
export type TransferAllocationReturn = FunctionReturn<
  typeof functions.transferAllocation
>;
