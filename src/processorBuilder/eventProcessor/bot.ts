import { givAbi } from '../../abi';
import { Chain, ChainConfig, configuration } from '../../config/configuration';
import { getTokenDistro } from '../../model/common';
import { checkBotBalanceSanity } from '../sanityCheck';
import { BotTxProcessParams, EventProcessParams } from './types';

export const processBotTx = async (params: BotTxProcessParams) => {
  const { tx, ctx, chain } = params;
  ctx.log.info(`Processing Bot transaction: ${chain}-${tx?.hash}`);
  const chainConfig = configuration.chains[chain as Chain] as ChainConfig;
  const { bots: botAddress, botMinBalance } = chainConfig;

  const bot = botAddress.find((b) => b.address === tx.from);

  if (bot) {
    try {
      const balanceHex = await ctx._chain.client.call('eth_getBalance', [
        tx.from,
        tx.block.height,
      ]);

      const balance = parseInt(balanceHex, 16) / 1e18;

      ctx.log.info(`Bot "${bot.name}" made transaction.
      Chain: ${chain}
      Transaction: ${tx.hash}
      New bot balance: ${balance}`);

      await checkBotBalanceSanity({
        bot,
        balance,
        botMinBalance,
        tx,
        chain,
        ctx,
      });
    } catch (e) {
      ctx.log.error(
        `Failed to get balance for bot ${bot.name}: 
              Chain: ${chain}
              Address: ${bot.address}
              RPC: ${chainConfig.rpc}
              ${e}`,
      );
    }
  }
};
