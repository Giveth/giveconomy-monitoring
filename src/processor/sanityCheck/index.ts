import {
  DataHandlerContext,
  FieldSelection,
  Log,
} from '@subsquid/evm-processor';
import { TokenDistro, Unipool } from '../../model';
import { Store } from '@subsquid/typeorm-store';

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
       `,
    );
  }
};

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
       Chain: ${unipool.chain}
       Unipool Addres: ${unipool.address}
       Total assigned to Unipool: ${unipool.totalAssignedTo}
       Total notified on Unipool: ${unipool.totalNotified}
       Transaction hash: ${log.transaction?.hash}
       `,
    );
  }
};
