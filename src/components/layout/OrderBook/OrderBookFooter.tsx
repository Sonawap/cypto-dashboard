import { useOpenOrderState } from "@/stores/order";
import { formatAmount } from "@/utils/helpers";

export const OrderBookFooter = () => {
  const { selectedPair } = useOpenOrderState();
  return (
    <footer className="flex gap-2 self-center mt-5 text-base font-medium leading-6 whitespace-nowrap">
      {
        selectedPair &&
        <>
          <div className={`${selectedPair?.price_change_percentage_24h < 0 ? 'text-red-500': 'text-green-500'}`}>{ formatAmount(selectedPair?.current_price)}</div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b93a91dddf6999bc5039861691801cb0823f7d45e32130903d473960be87a0a?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&" alt="Icon 2" className="my-auto w-4 aspect-square" />
          <div className="text-gray-50">{ formatAmount(selectedPair?.current_price)}</div>
        </>
      }
    </footer>
  );
};