import { Address, Chain } from '../config/configuration';
import { Store } from '@subsquid/typeorm-store';
import { TokenDistro, Unipool } from './generated';

export interface EntityIdParams {
  chain: Chain;
  address: Address;
}

export const getEntityId = ({ chain, address }: EntityIdParams): string => {
  return `${chain}_${address}`;
};

export const getTokenDistro = async (
  idParams: EntityIdParams,
  store: Store,
): Promise<TokenDistro> => {
  let tokenDistro = await store.get(TokenDistro, getEntityId(idParams));
  if (!tokenDistro) {
    tokenDistro = new TokenDistro({
      id: getEntityId(idParams),
      chain: idParams.chain,
      address: idParams.address,
      totalGIVBalance: 0n,
      totalAssigned: 0n,
    });
    await store.upsert(tokenDistro);
  }
  return tokenDistro;
};

export const getUniPool = async (
  idParams: EntityIdParams,
  store: Store,
): Promise<Unipool> => {
  let unipool = await store.get(Unipool, getEntityId(idParams));
  if (!unipool) {
    unipool = new Unipool({
      id: getEntityId(idParams),
      chain: idParams.chain,
      address: idParams.address,
      totalNotified: 0n,
      totalAssignedTo: 0n,
    });
    await store.upsert(unipool);
  }
  return unipool;
};
