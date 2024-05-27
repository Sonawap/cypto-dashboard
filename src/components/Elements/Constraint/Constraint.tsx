import { useState } from "react";

type ConstraintProps = {
  constraints: ConstraintPropsType[];
};

type ConstraintPropsType = {
  label: string; 
  key: number;
}

export const Constraint: React.FC<ConstraintProps> = ({ constraints }) => {

  const [selectedOption, setSelectedOption] = useState<ConstraintPropsType>(constraints[0]);

  const handleSelected = (item: ConstraintPropsType) => {
    setSelectedOption(item);
  }

  return (
    <div className="constraint flex gap-2 justify-between items-center mt-4 text-sm leading-4 text-gray-400 whitespace-nowrap">
      {constraints.map((constraint) => (
        <div 
          key={constraint.key} 
          onClick={() => handleSelected(constraint)}
          className={`cursor-pointer constraint__label self-stretch my-auto ${constraint.key === selectedOption.key ? 'constraint__selected justify-center self-stretch px-3 py-1.5 font-bold text-white bg-zinc-700 rounded-[100px]': ''}` }>
          {constraint.label}
        </div>
      ))}
    </div>
  );
};