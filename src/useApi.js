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

  let msg = `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`;
  console.log(msg);
  return [13, msg]; //just for the sample - imagine that this would return API data
};

export const useGetApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(0);
  const [msg, setMessage] = useState('Empty message');
  
  const execute = async () => {
    try {
      setIsLoading(true);
      const resp = await getApi();
      setData(resp[0]);
      setMessage(resp[1]);
      setIsLoading(false);
      return [data, msg];
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
    executeCb: useCallback(execute, [data, msg])
  };
};