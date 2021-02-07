import { createContext, useContext } from 'react';
import { RootStoreType } from '../models/root-store';
const RootStoreContext = createContext<RootStoreType>({} as RootStoreType);

export const RootStoreProvider = RootStoreContext.Provider;

export const useStores = () => useContext(RootStoreContext);
