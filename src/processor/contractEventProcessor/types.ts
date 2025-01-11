import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import { Chain } from '../../config/configuration';
import {
  DataHandlerContext,
  FieldSelection,
  Log,
} from '@subsquid/evm-processor';

export type EventProcessParams = {
  chain: Chain;
  db: TypeormDatabase;
  log: Log;
  ctx: DataHandlerContext<Store, FieldSelection>;
};
