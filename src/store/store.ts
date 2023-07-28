import create from "zustand";

type Asset = {
  balance: number,
  name: string,
};

type AddressContact = {
  name: string,
  address: string,
};

type User = {
  address: string,
  assets: Asset[],
  id: string,
  accountName: string,
  autoBlockTime: number,
  addressBook: AddressContact[],
  isLogined: boolean,
};

const getLocalStorage = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key)!)
};

const setLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));

interface StoreState {
  isFirstTime: boolean,
  user: User,
  setIsFirstTime: (val: boolean) => void,
  setAddress: (val: string) => void,
  setIsLogined: (val: boolean) => void,
  addAsset: (val: Asset) => void,
  setAssets: (val: Asset[]) => void,
};

export const useStore = create<StoreState>((set) => ({
  isFirstTime: getLocalStorage('leo_isFirstTime') === null ? true : false,
  user: {
    address: '',
    assets: [],
    id: '',
    accountName: 'Account1',
    autoBlockTime: 15,
    addressBook: [],
    isLogined: false,
  },
  setIsFirstTime: (val: boolean) => {
    set((state) => {
      setLocalStorage('leo_isFirstTime', val);
      return { 
        ...state,
        isFirstTime: val 
      }
    });
  },
  setIsLogined: (val: boolean) => {
    set((state) => ({
      user: {
        ...state.user,
        isLogined: val,
      }
    }));
  },
  setAddress: (val: string) => {
    set((state) => ({
      user: {
        ...state.user,
        address: val,
      },
    }));
  },
  addAsset: (val: Asset) => {
    set((state) => ({
      user: {
        ...state.user,
        assets: [...state.user.assets, val],
      },
    }));
  },
  setAssets: (val: Asset[]) => {
    set((state) => ({
      user: {
        ...state.user,
        assets: val,
      },
    }));
  },
}));
