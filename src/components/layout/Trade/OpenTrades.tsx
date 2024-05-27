import { Tab } from "@/components/Elements";

export const OpenTrades = () => {

  const tabs = [
    { label: 'Open Orders', key: 1 },
    { label: 'Positions', key: 2 },
    { label: 'Order History', key: 3 },
    { label: 'Trade History', key: 4 },
  ];

  return (
    <section className="items-center px-2 mt-3 pt-2 font-medium text-gray-400 rounded-lg border border-solid bg-bgDark-700 border-bgDark-700">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <nav className="gap-0 self-start p-0.5 text-sm leading-4 text-center rounded-xl bg-black bg-opacity-20 max-md:flex-wrap max-md:pr-5">
            <Tab options={tabs}/>
          </nav>
        </div>
      </div>
      <div className="text-center">
        <h2 className="mt-36 text-2xl leading-8 text-white max-md:mt-10">No Open Orders</h2>
        <p className="mt-2 mb-32 font-normal leading-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Id pulvinar nullam sit imperdiet pulvinar.
        </p>
      </div>
    </section>
  );
}