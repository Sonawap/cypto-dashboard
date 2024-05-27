import { Divider } from "@/components/Elements";
import { StatType } from "./types";

export const StatItem: React.FC<StatType> = ({ iconSrc, label, value, valueColor }) => (
  <div className="flex gap-5 justify-between">
    <div className="flex flex-col justify-center">
      <div className="flex gap-1 text-xs leading-5 text-gray-400">
        <img loading="lazy" src={iconSrc} alt={`${label} icon`} className="shrink-0 my-auto w-4 aspect-square" />
        <div>{label}</div>
      </div>
      <div className={`${valueColor} mt-1 text-sm leading-6`}>
        {value}
      </div>
    </div>
    <Divider />
  </div>
);