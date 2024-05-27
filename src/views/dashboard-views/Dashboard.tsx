import { OpenTrades, Trade, TradeDetails } from "@/components/layout";
import OrderBook from "@/components/layout/OrderBook/OrderBook";
import { useDocumentTitle } from "@/hooks";
import { FC } from "react";

interface DashboardProps {
  title: string;
}
const Dashboard: FC<DashboardProps> = ({title}) => {

  useDocumentTitle(title);

  return (
    <div className='grid grid-cols-10 gap-3'>
      <div className='col-span-8'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-9 ml-3'>
            <TradeDetails />
          </div>
          <div className='col-span-3'>
            <OrderBook />
          </div>
        </div>
        <OpenTrades />
      </div>
      <div className='col-span-2'>
        <Trade />
      </div>
    </div>
  )
}

export default Dashboard;