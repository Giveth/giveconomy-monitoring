import * as p from '@subsquid/evm-codec';
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi';
import type {
  EventParams as EParams,
  FunctionArguments,
  FunctionReturn,
} from '@subsquid/evm-abi';

export const events = {
  OwnershipTransferred: event(
    '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0',
    'OwnershipTransferred(address,address)',
    { previousOwner: indexed(p.address), newOwner: indexed(p.address) },
  ),
  RewardAdded: event(
    '0xde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d',
    'RewardAdded(uint256)',
    { reward: p.uint256 },
  ),
  RewardPaid: event(
    '0xe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486',
    'RewardPaid(address,uint256)',
    { user: indexed(p.address), reward: p.uint256 },
  ),
  Staked: event(
    '0x9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d',
    'Staked(address,uint256)',
    { user: indexed(p.address), amount: p.uint256 },
  ),
  Withdrawn: event(
    '0x7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5',
    'Withdrawn(address,uint256)',
    { user: indexed(p.address), amount: p.uint256 },
  ),
};

export const functions = {
  __LPTokenWrapper_initialize: fun(
    '0x478f4d02',
    '__LPTokenWrapper_initialize(address)',
    { _uni: p.address },
  ),
  balanceOf: viewFun(
    '0x70a08231',
    'balanceOf(address)',
    { account: p.address },
    p.uint256,
  ),
  duration: viewFun('0x0fb5a6b4', 'duration()', {}, p.uint256),
  earned: viewFun(
    '0x008cc262',
    'earned(address)',
    { account: p.address },
    p.uint256,
  ),
  exit: fun('0xe9fad8ee', 'exit()', {}),
  getReward: fun('0x3d18b912', 'getReward()', {}),
  initialize: fun('0x1794bb3c', 'initialize(address,address,uint256)', {
    _tokenDistribution: p.address,
    _uni: p.address,
    _duration: p.uint256,
  }),
  lastTimeRewardApplicable: viewFun(
    '0x80faa57d',
    'lastTimeRewardApplicable()',
    {},
    p.uint256,
  ),
  lastUpdateTime: viewFun('0xc8f33c91', 'lastUpdateTime()', {}, p.uint256),
  notifyRewardAmount: fun('0x3c6b16ab', 'notifyRewardAmount(uint256)', {
    reward: p.uint256,
  }),
  owner: viewFun('0x8da5cb5b', 'owner()', {}, p.address),
  periodFinish: viewFun('0xebe2b12b', 'periodFinish()', {}, p.uint256),
  renounceOwnership: fun('0x715018a6', 'renounceOwnership()', {}),
  rewardDistribution: viewFun(
    '0x101114cf',
    'rewardDistribution()',
    {},
    p.address,
  ),
  rewardPerToken: viewFun('0xcd3daf9d', 'rewardPerToken()', {}, p.uint256),
  rewardPerTokenStored: viewFun(
    '0xdf136d65',
    'rewardPerTokenStored()',
    {},
    p.uint256,
  ),
  rewardRate: viewFun('0x7b0a47ee', 'rewardRate()', {}, p.uint256),
  rewards: viewFun(
    '0x0700037d',
    'rewards(address)',
    { _0: p.address },
    p.uint256,
  ),
  setRewardDistribution: fun('0x0d68b761', 'setRewardDistribution(address)', {
    _rewardDistribution: p.address,
  }),
  stake: fun('0xa694fc3a', 'stake(uint256)', { amount: p.uint256 }),
  stakeWithPermit: fun('0x71cc29e5', 'stakeWithPermit(uint256,bytes)', {
    amount: p.uint256,
    permit: p.bytes,
  }),
  tokenDistro: viewFun('0xca8af4d4', 'tokenDistro()', {}, p.address),
  totalSupply: viewFun('0x18160ddd', 'totalSupply()', {}, p.uint256),
  transferOwnership: fun('0xf2fde38b', 'transferOwnership(address)', {
    newOwner: p.address,
  }),
  uni: viewFun('0xedc9af95', 'uni()', {}, p.address),
  userRewardPerTokenPaid: viewFun(
    '0x8b876347',
    'userRewardPerTokenPaid(address)',
    { _0: p.address },
    p.uint256,
  ),
  withdraw: fun('0x2e1a7d4d', 'withdraw(uint256)', { amount: p.uint256 }),
};

export class Contract extends ContractBase {
  balanceOf(account: BalanceOfParams['account']) {
    return this.eth_call(functions.balanceOf, { account });
  }

  duration() {
    return this.eth_call(functions.duration, {});
  }

  earned(account: EarnedParams['account']) {
    return this.eth_call(functions.earned, { account });
  }

  lastTimeRewardApplicable() {
    return this.eth_call(functions.lastTimeRewardApplicable, {});
  }

  lastUpdateTime() {
    return this.eth_call(functions.lastUpdateTime, {});
  }

  owner() {
    return this.eth_call(functions.owner, {});
  }

  periodFinish() {
    return this.eth_call(functions.periodFinish, {});
  }

  rewardDistribution() {
    return this.eth_call(functions.rewardDistribution, {});
  }

  rewardPerToken() {
    return this.eth_call(functions.rewardPerToken, {});
  }

  rewardPerTokenStored() {
    return this.eth_call(functions.rewardPerTokenStored, {});
  }

  rewardRate() {
    return this.eth_call(functions.rewardRate, {});
  }

  rewards(_0: RewardsParams['_0']) {
    return this.eth_call(functions.rewards, { _0 });
  }

  tokenDistro() {
    return this.eth_call(functions.tokenDistro, {});
  }

  totalSupply() {
    return this.eth_call(functions.totalSupply, {});
  }

  uni() {
    return this.eth_call(functions.uni, {});
  }

  userRewardPerTokenPaid(_0: UserRewardPerTokenPaidParams['_0']) {
    return this.eth_call(functions.userRewardPerTokenPaid, { _0 });
  }
}

/// Event types
export type OwnershipTransferredEventArgs = EParams<
  typeof events.OwnershipTransferred
>;
export type RewardAddedEventArgs = EParams<typeof events.RewardAdded>;
export type RewardPaidEventArgs = EParams<typeof events.RewardPaid>;
export type StakedEventArgs = EParams<typeof events.Staked>;
export type WithdrawnEventArgs = EParams<typeof events.Withdrawn>;

/// Function types
export type __LPTokenWrapper_initializeParams = FunctionArguments<
  typeof functions.__LPTokenWrapper_initialize
>;
export type __LPTokenWrapper_initializeReturn = FunctionReturn<
  typeof functions.__LPTokenWrapper_initialize
>;

export type BalanceOfParams = FunctionArguments<typeof functions.balanceOf>;
export type BalanceOfReturn = FunctionReturn<typeof functions.balanceOf>;

export type DurationParams = FunctionArguments<typeof functions.duration>;
export type DurationReturn = FunctionReturn<typeof functions.duration>;

export type EarnedParams = FunctionArguments<typeof functions.earned>;
export type EarnedReturn = FunctionReturn<typeof functions.earned>;

export type ExitParams = FunctionArguments<typeof functions.exit>;
export type ExitReturn = FunctionReturn<typeof functions.exit>;

export type GetRewardParams = FunctionArguments<typeof functions.getReward>;
export type GetRewardReturn = FunctionReturn<typeof functions.getReward>;

export type InitializeParams = FunctionArguments<typeof functions.initialize>;
export type InitializeReturn = FunctionReturn<typeof functions.initialize>;

export type LastTimeRewardApplicableParams = FunctionArguments<
  typeof functions.lastTimeRewardApplicable
>;
export type LastTimeRewardApplicableReturn = FunctionReturn<
  typeof functions.lastTimeRewardApplicable
>;

export type LastUpdateTimeParams = FunctionArguments<
  typeof functions.lastUpdateTime
>;
export type LastUpdateTimeReturn = FunctionReturn<
  typeof functions.lastUpdateTime
>;

export type NotifyRewardAmountParams = FunctionArguments<
  typeof functions.notifyRewardAmount
>;
export type NotifyRewardAmountReturn = FunctionReturn<
  typeof functions.notifyRewardAmount
>;

export type OwnerParams = FunctionArguments<typeof functions.owner>;
export type OwnerReturn = FunctionReturn<typeof functions.owner>;

export type PeriodFinishParams = FunctionArguments<
  typeof functions.periodFinish
>;
export type PeriodFinishReturn = FunctionReturn<typeof functions.periodFinish>;

export type RenounceOwnershipParams = FunctionArguments<
  typeof functions.renounceOwnership
>;
export type RenounceOwnershipReturn = FunctionReturn<
  typeof functions.renounceOwnership
>;

export type RewardDistributionParams = FunctionArguments<
  typeof functions.rewardDistribution
>;
export type RewardDistributionReturn = FunctionReturn<
  typeof functions.rewardDistribution
>;

export type RewardPerTokenParams = FunctionArguments<
  typeof functions.rewardPerToken
>;
export type RewardPerTokenReturn = FunctionReturn<
  typeof functions.rewardPerToken
>;

export type RewardPerTokenStoredParams = FunctionArguments<
  typeof functions.rewardPerTokenStored
>;
export type RewardPerTokenStoredReturn = FunctionReturn<
  typeof functions.rewardPerTokenStored
>;

export type RewardRateParams = FunctionArguments<typeof functions.rewardRate>;
export type RewardRateReturn = FunctionReturn<typeof functions.rewardRate>;

export type RewardsParams = FunctionArguments<typeof functions.rewards>;
export type RewardsReturn = FunctionReturn<typeof functions.rewards>;

export type SetRewardDistributionParams = FunctionArguments<
  typeof functions.setRewardDistribution
>;
export type SetRewardDistributionReturn = FunctionReturn<
  typeof functions.setRewardDistribution
>;

export type StakeParams = FunctionArguments<typeof functions.stake>;
export type StakeReturn = FunctionReturn<typeof functions.stake>;

export type StakeWithPermitParams = FunctionArguments<
  typeof functions.stakeWithPermit
>;
export type StakeWithPermitReturn = FunctionReturn<
  typeof functions.stakeWithPermit
>;

export type TokenDistroParams = FunctionArguments<typeof functions.tokenDistro>;
export type TokenDistroReturn = FunctionReturn<typeof functions.tokenDistro>;

export type TotalSupplyParams = FunctionArguments<typeof functions.totalSupply>;
export type TotalSupplyReturn = FunctionReturn<typeof functions.totalSupply>;

export type TransferOwnershipParams = FunctionArguments<
  typeof functions.transferOwnership
>;
export type TransferOwnershipReturn = FunctionReturn<
  typeof functions.transferOwnership
>;

export type UniParams = FunctionArguments<typeof functions.uni>;
export type UniReturn = FunctionReturn<typeof functions.uni>;

export type UserRewardPerTokenPaidParams = FunctionArguments<
  typeof functions.userRewardPerTokenPaid
>;
export type UserRewardPerTokenPaidReturn = FunctionReturn<
  typeof functions.userRewardPerTokenPaid
>;

export type WithdrawParams = FunctionArguments<typeof functions.withdraw>;
export type WithdrawReturn = FunctionReturn<typeof functions.withdraw>;
