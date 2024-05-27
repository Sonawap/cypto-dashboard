import { Button, Constraint, Tab } from "@/components/Elements";
import { InputSection } from "./InputSection";
import { AccountSummary } from "./AccountSummary";
import { TRADETABTYPE } from "@/config";
import { useState } from "react";

export const Trade: React.FC = () => {
  const [currentOrderTab, setCurrentOrderTab] = useState<'buy' | 'sell'>('buy');
  const constraints = [
    { label: 'Limit', key: 1 },
    { label: 'Default', key: 2 },
    { label: 'Stop-Limit', key: 3 },
  ];

  const accountValues = [
    { label: 'Total account value', value: '0.00' },
    { label: 'Open Orders', value: '0.00' },
  ];
  
  const tabs = [
    { label: 'buy', key: 1 },
    { label: 'sell', key: 2 },
  ];


  return (
    <div className="trade flex flex-col px-2 pt-3 pb-7 mx-auto w-full text-xs font-medium rounded-lg border border-solid bg-bgDark-700 border-bgDark-700 max-md:mt-2">
      <Tab options={tabs} showBorder={true}setCurrentOrderTab={setCurrentOrderTab}/>
      <Constraint constraints={constraints} />
      <InputSection currentOrderTab={currentOrderTab} />
      <hr className="trade__divider shrink-0 mt-3 h-px border border-solid bg-bgDark-600 border-bgDark-700" />
      <AccountSummary values={accountValues} />
      <Button className="justify-center mt-8 w-28" size="md" color="primary">Deposit</Button>
    </div>
  );
};