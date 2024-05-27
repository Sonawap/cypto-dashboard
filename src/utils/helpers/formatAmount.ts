export const formatAmount = (amount?: number, showCurrency: boolean = true) => {
  const res = Number(amount || 0).toLocaleString('default', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return showCurrency ? '$' + res : res;
};
