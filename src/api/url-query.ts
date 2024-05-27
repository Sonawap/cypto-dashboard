export const url = {
  getTradingPair:(vs_currency: string, perPage: number) => `coins/markets?vs_currency=${vs_currency}&per_page=${perPage}`,
};

export const queryKey = {
  all: ['trading'],
  getTopTradingPairs: (exchangeId: string) => [ `pairs/${exchangeId}`]
};
