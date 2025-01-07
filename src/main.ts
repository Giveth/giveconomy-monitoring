import { EvmBatchProcessor } from "@subsquid/evm-processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as usdtAbi from "./abi/usdt";
import { Transfer } from "./model";

const processor = new EvmBatchProcessor()
  .setGateway("https://v2.archive.subsquid.io/network/ethereum-mainnet")
  .setRpcEndpoint({
    // set RPC endpoint in .env
    url: process.env.RPC_ETH_HTTP!,
    rateLimit: 10,
  })
  .setFinalityConfirmation(75) // 15 mins to finality
  .addLog({
    address: ["0xdAC17F958D2ee523a2206206994597C13D831ec7"],
    topic0: [usdtAbi.events.Transfer.topic],
  });

const db = new TypeormDatabase();

processor.run(db, async (ctx) => {
  const transfers: Transfer[] = [];
  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      let { from, to, value } = usdtAbi.events.Transfer.decode(log);
      transfers.push(
        new Transfer({
          id: log.id,
          from,
          to,
          value,
        })
      );
    }
  }
  await ctx.store.insert(transfers);
});
