import { OpenOrderRowProps } from "../Pair";

interface OpenOrderRowPropsType {
  row: OpenOrderRowProps;
  totalPrice: number;
}
export const OpenOrderRow: React.FC<OpenOrderRowPropsType> = ({ row, totalPrice }) => (
  <div className="flex gap-1 justify-between pr-4">
    <div className="text-orange-500 text-left">{row.price}</div>
    <div className="text-center">{row.amount}</div>
    <div className="text-right">{totalPrice}</div>
  </div>
);