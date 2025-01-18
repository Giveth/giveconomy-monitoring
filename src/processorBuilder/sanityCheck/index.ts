import {
  DataHandlerContext,
  FieldSelection,
  Log,
  Transaction,
} from '@subsquid/evm-processor';
import { TokenDistro, Unipool } from '../../model';
import { Store } from '@subsquid/typeorm-store';
import {
  BotInfo,
  Chain,
  ChainConfig,
  configuration,
  getChainExplorerUrl,
} from '../../config/configuration';

/**
 * Checks the sanity of the token distribution by comparing the total assigned tokens
 * with the total GIV balance in the TokenDistro. Logs an error and alerts if the total assigned
 * tokens exceed the total GIV balance.
 *
 * @param {Object} params - The parameters for the sanity check.
 * @param {TokenDistro} params.tokenDistro - The token distribution details.
 * @param {Log} params.log - The log details of the transaction.
 * @param {DataHandlerContext<Store, FieldSelection>} params.ctx - The context for data handling.
 *
 * @returns {Promise<void>} - A promise that resolves when the sanity check is complete.
 */
export const checkTokenDistroSanity = async ({
  tokenDistro,
  log,
  ctx,
}: {
  tokenDistro: TokenDistro;
  log: Log;
  ctx: DataHandlerContext<Store, FieldSelection>;
}) => {
  if (tokenDistro.totalAssigned > tokenDistro.totalGIVBalance) {
    ctx.log.error(
      `Assign exceeds TokenDistro GIV Balance:
       Chain: ${tokenDistro.chain}
       TokenDistro Addres: ${tokenDistro.address}
       Total GIV transferred to TokenDistro: ${tokenDistro.totalGIVBalance}
       Total assigned on TokenDistro: ${tokenDistro.totalAssigned}
       Transaction hash: ${log.transaction?.hash}
       Time: ${new Date(log.block.timestamp).toISOString()}
       Link: ${getChainExplorerUrl(tokenDistro.chain as Chain)}/tx/${log.transaction?.hash}
       `,
    );
  }
};

/**
 * Checks the sanity of a Unipool by comparing the total notified rewards with the total assigned balance.
 * Logs an error and alerts if the notified rewards exceed the assigned balance.
 *
 * @param {Object} params - The parameters for the sanity check.
 * @param {Unipool} params.unipool - The Unipool object containing details about the Unipool.
 * @param {Log} params.log - The log object containing transaction and block information.
 * @param {DataHandlerContext<Store, FieldSelection>} params.ctx - The context object for data handling and logging.
 *
 * @returns {Promise<void>} - A promise that resolves when the sanity check is complete.
 */
export const checkUnipoolSanity = async ({
  unipool,
  log,
  ctx,
}: {
  unipool: Unipool;
  log: Log;
  ctx: DataHandlerContext<Store, FieldSelection>;
}) => {
  if (unipool.totalNotified > unipool.totalAssignedTo) {
    ctx.log.error(
      `Notified rewards exceed Unipool assigned balance on TokenDistro:
      Name: ${unipool.name}
      Chain: ${unipool.chain}
      Unipool Addres: ${unipool.address}
      Total assigned to Unipool: ${unipool.totalAssignedTo}
      Total notified on Unipool: ${unipool.totalNotified}
      Transaction hash: ${log.transaction?.hash}
      Time: ${new Date(log.block.timestamp).toISOString()}
      Link: ${getChainExplorerUrl(unipool.chain as Chain)}/tx/${log.transaction?.hash}
       `,
    );
  }
};

export const checkBotBalanceSanity = async ({
  bot,
  balance,
  botMinBalance,
  tx,
  chain,
  ctx,
}: {
  bot: BotInfo;
  balance: number;
  tx: Transaction;
  chain: Chain;
  botMinBalance: number;
  ctx: DataHandlerContext<Store, FieldSelection>;
}) => {
  if (balance < botMinBalance) {
    ctx.log.error(
      `Bot balance is less than the minimum required balance:
      Bot: ${bot.name}
      Chain: ${chain}
      Address: ${bot.address}
      Balance: ${balance}
      Minimum required balance: ${botMinBalance}
      Time: ${new Date(tx.block.timestamp).toISOString()}
      Link: ${getChainExplorerUrl(chain)}/tx/${tx.hash}
      `,
    );
  }
};
