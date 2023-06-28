import { LocalStorageKeys } from '../constants';

const setLocalStorageItem = <T = object>(key: LocalStorageKeys, value: T) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageItem = (key: LocalStorageKeys) => {
  const data = localStorage.getItem(key);
  return data != null ? JSON.parse(data) : null;
};

const deleteLocalStorageItem = (key: LocalStorageKeys) => {
  return localStorage.removeItem(key);
};

const clearFromLocalStorage = async () => {
  await Promise.resolve();
  return localStorage.clear();
};

const updateLocalStorageItem = (
  key: LocalStorageKeys,
  value: null | object
) => {
  const oldData: string | null = localStorage.getItem(key);
  if (oldData != null && value !== null) {
    const newData = {
      ...JSON.parse(oldData),
      ...(value as Record<string, unknown>),
    };
    setLocalStorageItem(key, newData);
  }
};

export const LocalStorageHelpers = {
  setLocalStorageItem,
  updateLocalStorageItem,
  getLocalStorageItem,
  deleteLocalStorageItem,
  clearFromLocalStorage,
};
