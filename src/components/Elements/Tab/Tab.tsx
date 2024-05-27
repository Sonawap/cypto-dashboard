import { TRADETABTYPE } from '@/config';
import { useState } from 'react';

type TabProps = {
  options: TabOptionType[];
  showBorder?: boolean;
  className?: string;
  setCurrentOrderTab?: (name: 'buy' | 'sell') => void;
};

type TabOptionType = {
  label: any;
  key: number;
}

export const Tab: React.FC<TabProps> = ({ setCurrentOrderTab, options,className, showBorder = false }) => {

  const [selectedOption, setSelectedOption] = useState<TabOptionType>(options[0]);

  const handleSelected = (item: TabOptionType) => {
    setSelectedOption(item);
    setCurrentOrderTab(item.label)
  }
  return (
    <div className="flex gap-0 justify-evenly rounded-lg bg-black bg-opacity-20">
      {options.map((option: TabOptionType) => (
        <div key={option.key} className={`${className} w-full cursor-pointer`} onClick={() => handleSelected(option)}>
          <h4 className={`text-center capitalize text-sm rounded-lg ${option.key === selectedOption.key ? `bg-bgDark-600 text-white ${showBorder ? selectedOption.label === TRADETABTYPE.BUY ? 'border border-green-500' : 'border border-red-500' : ''}` : ''} py-2`}>{ option.label }</h4>
        </div>
      ))}
    </div>
  )
};