export type StatType = {
  iconSrc: string;
  label: string;
  value: string|number;
  valueColor: string;
}

export type OpenOrderRowProps = {
  id: number;
  price: number;
  amount: number;
  orderType: 'buy' | 'sell'
}

export type AccountSummaryType = {
  label: string; 
  value: string;
}