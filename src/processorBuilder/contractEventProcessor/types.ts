import { Store } from '@subsquid/typeorm-store';
import { Chain } from '../../config/configuration';
import {
  DataHandlerContext,
  FieldSelection,
  Log,
} from '@subsquid/evm-processor';

export type EventProcessParams = {
  chain: Chain;
  log: Log;

  ctx: DataHandlerContext<Store, FieldSelection>;
};
