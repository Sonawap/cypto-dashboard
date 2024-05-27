import { useGetTopTradingPairs } from "@/api/requests/getTadingPairs"
import { Coin } from "@/api/types";
import { Divider } from "@/components/Elements"
import { useOpenOrderActions, useOpenOrderState } from "@/stores/order";
import { formatAmount } from "@/utils/helpers";
import { useEffect, useState } from "react";
import { CoinDropDown } from "./pairDropDown";
// import { ReactComponent as DownIcon } from "@/assets/icons/downIcon.svg";

export const StatHeader: React.FC = () => {
  const { selectedPair, selectedCurrency } = useOpenOrderState();
  const {data} = useGetTopTradingPairs(selectedCurrency);
  const [pairs, setPairs] = useState<Coin[]>([]);
  const { setCurrentSelectedPair, setSelectedCurrency } = useOpenOrderActions();

  useEffect(() => {
    if(data){
      setPairs(data);
      setCurrentSelectedPair(data?.[0]);
    }
  }, [data])

  return (
    <header className="flex gap-4 justify-between pr-3 my-auto text-2xl leading-8 text-white whitespace-nowrap">
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="m-1">
          {
            selectedPair &&
            <div className="flex gap-2">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-10">
                    <img src={`${selectedCurrency === 'usd' ? 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661' : 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'} `}/>
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src={selectedPair?.image} />
                  </div>
                </div>
              </div>
              <div className="mt-1">{ selectedPair?.id }/{ selectedCurrency }</div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d37625e86353f261bac7bee624ecdfab8539159a48f358e14a98c866358dc3?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&" alt="Icon 1" className="w-6 aspect-square" />
            </div>
          }
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-bgDark-700 rounded-box w-52">
          <CoinDropDown selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} pairs={pairs}/>
        </ul>
      </div>
      <div className="flex gap-5 justify-between text-lg leading-6 text-emerald-500 whitespace-nowrap">
        <div className="my-auto">{formatAmount(selectedPair?.current_price)}</div>
        <Divider />
      </div>
    </header>
  )
}