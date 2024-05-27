import { Coin } from '@/api/types';
import { OpenOrderRowProps } from '@/components/layout';
import { OrderData } from '@/data';
import { create } from '@/libs/zustand';
interface CartState {
  orders: OpenOrderRowProps[];
  actions: OpenOrderActions;
  selectedPair: Coin | undefined;
  totalPrice: number;
  selectedCurrency: string;
}

interface OpenOrderActions {
  addItem: (item: OpenOrderRowProps) => void;
  removeItem: (id: number) => void;
  setCurrentSelectedPair: (pair: Coin) => void;
  setSelectedCurrency: (currency: string) => void;
}

const useOpenOrderStore = create<CartState>()((set) => ({
  orders: OrderData,
  selectedCurrency: 'usd',
  selectedPair: undefined,
  totalPrice: 0,
  actions: {
    addItem: (item: OpenOrderRowProps) =>
      set((state) => ({
        orders: [...state.orders, item],
        totalPrice: state.selectedPair?.current_price ?? 0 + state.orders.reduce((acc, item) => acc + item.amount, 0) + item.amount,
      })),
    removeItem: (id: number) =>
      set((state) => ({
        orders: state.orders.filter((item: OpenOrderRowProps) => item.id !== id),
      })),
    setCurrentSelectedPair: (pair: Coin) =>
      set(() => ({
        selectedPair: pair
      })),
    setSelectedCurrency: (currency: string) =>
      set(() => ({
        selectedCurrency: currency
      })),
  },
}));

export const useOpenOrderState = () =>
  useOpenOrderStore((state) => ({
    orders: state.orders,
    totalPrice: state.totalPrice,
    selectedPair: state.selectedPair,
    selectedCurrency: state.selectedCurrency,
  }));

export const useOpenOrderActions = () => useOpenOrderStore((state) => state.actions);

