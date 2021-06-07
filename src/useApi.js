import {
    useState,
    useCallback,
  } from 'react';
import { ApiPromise } from '@polkadot/api';

export const getApi = async () => {
  const api = await ApiPromise.create();
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
  return 13; //just for the sample - imagine that this would return API data
};

export const useGetApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(0);
  
  const execute = async () => {
    try {
      setIsLoading(true);
      const todos = await getApi();
      setData(todos);
      setIsLoading(false);
      return todos;
    } catch (e) {
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
  
  return {
    isLoading,
    error,
    data,
    execute: execute,
    executeCb: useCallback(execute, [])
  };
};