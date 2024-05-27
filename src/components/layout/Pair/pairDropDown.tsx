import { Coin } from '@/api/types';
import { useOpenOrderActions } from '@/stores/order';
import { formatAmount } from '@/utils/helpers';
import * as React from 'react';

interface CurrencyRowProps {
  imgSrc?: string;
  label: string;
  price: number;
  change: number;
  altText: string;
  selectedCurrency: string;
  onClick: () => void;
}

interface CoinDropDownProps {
  pairs: Coin[];
  setSelectedCurrency: (currency: string) => void;
  selectedCurrency: string;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ selectedCurrency, imgSrc, label, price, change, altText, onClick }) => (
  <div className="flex gap-5 justify-between mt-6 w-full cursor-pointer" onClick={onClick}>
    <div className="flex gap-4 text-gray-400">
      <img loading="lazy" src={imgSrc} alt={altText} className="shrink-0 w-12 h-12 object-cover" />
      <span className="my-auto">{label}</span>
    </div>
    <div className="flex gap-5 justify-between my-auto whitespace-nowrap">
      <span className="text-gray-400">{formatAmount(price, selectedCurrency === 'usd' ? true : false)} {selectedCurrency === 'btc' ? 'BTC' : ''}</span>
      <span className={`${change < 0 ? 'text-red-500': 'text-green-500'}`}>{change}</span>
    </div>
  </div>
);

export const CoinDropDown: React.FC<CoinDropDownProps> = ({ pairs, setSelectedCurrency, selectedCurrency }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPairs = pairs.filter(pair => 
    pair.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { setCurrentSelectedPair } = useOpenOrderActions();

  const handleRowClick = (pair: Coin) => {
    setCurrentSelectedPair(pair);
  };

  return (
    <section className="flex flex-col px-4 pt-5 text-sm font-medium leading-4 rounded-lg border border-solid bg-bgDark-800 border-bgDark-800 w-[450px]">
      <header className="font-bold text-white">Select Market</header>
      <form className="flex flex-col justify-center items-start px-4 py-2 mt-4 w-full text-xs leading-5 text-gray-400 whitespace-nowrap rounded-lg border border-solid bg-bgDark-700 border-bgDark-500">
        <label htmlFor="searchInput" className="flex gap-4">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a1df147c5990d57d9c1322a7aa8c967c7a86c8f4cf423e6a920a632e6d079d?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&" alt="Search icon" className="shrink-0 self-start w-4 aspect-square" />
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            className="bg-transparent border-none focus:outline-none text-white"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </form>
      <div className="shrink-0 mt-4 h-px border border-solid bg-zinc-700 border-zinc-700" />
      <nav className="flex gap-4 justify-between items-center self-start mt-2 text-gray-400 whitespace-nowrap">
        <button className="">All</button>
        <button className={`self-stretch my-auto justify-center ${selectedCurrency === 'usd' ? "px-3 py-1.5 text-white bg-zinc-700 rounded-[100px]" : ""}`} onClick={() => setSelectedCurrency('usd')}>USD</button>
        <button className={`self-stretch my-auto justify-center ${selectedCurrency === 'btc' ? "px-3 py-1.5 text-white bg-zinc-700 rounded-[100px]" : ""}`} onClick={() => setSelectedCurrency('btc')}>BTC</button>
      </nav>
      <div className="shrink-0 mt-2 h-px border border-solid bg-zinc-700 border-zinc-700" />
      {filteredPairs.length > 0 ? (
        filteredPairs.map((pair, index) => (
          <CurrencyRow
            selectedCurrency={selectedCurrency}
            imgSrc={pair.image}
            label={pair.symbol}
            price={pair.current_price}
            change={pair.price_change_percentage_24h}
            key={index}
            altText={pair.id}
            onClick={() => handleRowClick(pair)}
          />
        ))
      ) : (
        <div className="flex justify-center items-center mt-4 text-gray-400">
          No results found
        </div>
      )}
    </section>
  );
}
