import { axios } from '@/libs/axios';
import { ExtractFnReturnType, QueryConfig, useQuery } from '@/libs/react-query';
import { Coin } from '@/api/types';
import { formatError } from '@/utils/helpers';

import { queryKey, url } from '../url-query';

export const getTopTradingPairs = async (vs_currency: string, perPage: number = 10) => {
  try {
    const response = await axios.get<Coin[]>(url.getTradingPair(vs_currency, perPage));
    return response.data;
  } catch (error) {
    throw new Error(formatError(error));
  }
};

type QueryFnType = typeof getTopTradingPairs;

type useTopTradingPairsOptions = QueryConfig<QueryFnType>;

export const useGetTopTradingPairs = (vs_currency: string, perPage: number = 10, config?: useTopTradingPairsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    retry(failureCount, error: any) {
      if ([404, 401].includes(error.status)) return false;
      else if (failureCount < 1) return true;
      else return false;
    },
    ...config,
    queryKey: queryKey.getTopTradingPairs(vs_currency),
    queryFn: () => getTopTradingPairs(vs_currency, perPage),
  });
};
