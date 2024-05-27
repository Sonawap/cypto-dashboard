import { StatData } from "@/data";
import { StatItem } from "./StatItem";
import { StatHeader } from "./StatHeader";
import { useOpenOrderState } from "@/stores/order";

export const Pair: React.FC = () => {
  const { selectedPair } = useOpenOrderState();
  return (
    <section className="flex gap-2 p-4 mt-2 font-medium rounded-lg border border-solid bg-bgDark-700 border-bgDark-600 max-md:flex-wrap max-md:pr-5 mb-3">
      <StatHeader />
      {
        selectedPair &&
        <div className="flex gap-5 justify-between pr-2.5 max-md:flex-wrap">
          <StatItem 
            iconSrc={StatData?.[0].iconSrc}
            label={StatData?.[0]?.label}
            value={selectedPair?.price_change_percentage_24h + ' %'}
            valueColor={`${selectedPair?.price_change_percentage_24h < 0 ? 'text-red-500': 'text-green-500'}`}
          />
          <StatItem 
            iconSrc={StatData?.[1].iconSrc}
            label={StatData?.[1]?.label}
            value={selectedPair?.high_24h}
            valueColor={StatData?.[1]?.valueColor}
          />
          <StatItem 
            iconSrc={StatData?.[2].iconSrc}
            label={StatData?.[2]?.label}
            value={selectedPair?.low_24h}
            valueColor={StatData?.[2]?.valueColor}
          />
          <StatItem 
            iconSrc={StatData?.[3].iconSrc}
            label={StatData?.[3]?.label}
            value={selectedPair?.total_volume}
            valueColor={StatData?.[3]?.valueColor}
          />
        </div>
      }
    </section>
  );
}