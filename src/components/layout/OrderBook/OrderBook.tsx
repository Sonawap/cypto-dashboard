import { Tab } from "@/components/Elements";
import * as React from "react";
import { OpenOrderRow } from "./OpenOrderRow";
import { OrderBookHeader } from "./OrderBookHeader";
import { OrderBookFooter } from "./OrderBookFooter";
import { useOpenOrderState } from "@/stores/order";
import { TRADETABTYPE } from "@/config";

const OrderBook: React.FC = () => {
  const tabs = [
    { label: 'Order Book', key: 1 },
    { label: 'Recent trades', key: 2 },
  ];

  const { orders, totalPrice, selectedPair, selectedCurrency } = useOpenOrderState();

  return (
    <section className="flex flex-col p-2 w-full rounded-lg border border-solid bg-bgDark-700 border-bgDark-800">
      <Tab options={tabs} className="p-1"/>

      <div className="flex gap-2.5 justify-between px-1 mt-2.5 w-full">
        <OrderBookHeader />
        <div className="flex gap-2.5 justify-center px-2 py-1 text-xs font-medium leading-5 text-gray-100 whitespace-nowrap rounded bg-bgDark-700">
          <div className="my-auto">10</div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d37625e86353f261bac7bee624ecdfab8539159a48f358e14a98c866358dc3?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&" alt="Icon 1" className="w-6 aspect-square" />
        </div>
      </div>

      <header className="flex gap-2.5 justify-between py-1 pr-4 mt-2 text-xs font-semibold leading-4 text-gray-400 max-md:pr-5 max-md:mx-1">
        <div>
          <span className="font-medium">Price</span>
          <br />
          <span className="text-xs font-medium">({selectedPair?.id})</span>
        </div>
        <div className="text-right">
          <span className="font-medium">Amounts </span>
          <span className="text-xs font-medium">({selectedCurrency})</span>
        </div>
        <div className="self-start font-medium text-right leading-[167%]">Total</div>
      </header>

      <main className="flex flex-col pl-4 mt-1 text-xs font-medium leading-5 text-white whitespace-nowrap max-md:mx-1">
        {orders.map((row) => (
          row.orderType === TRADETABTYPE.BUY && <OpenOrderRow totalPrice={totalPrice} key={row.id} row={row} />
        ))}
      </main>

      <OrderBookFooter />

      <section className="flex flex-col py-1 pl-4 mt-5 text-xs font-medium leading-5 whitespace-nowrap">
        {orders.map((row) => (
          row.orderType === TRADETABTYPE.SELL && <OpenOrderRow totalPrice={totalPrice} key={row.id} row={row} />
        ))}
      </section>
    </section>
  );
};

export default OrderBook;