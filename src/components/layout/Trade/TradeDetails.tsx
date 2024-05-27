import { Divider } from "@/components/Elements";
import { CartDataOptions, series } from "@/data";
import ReactApexChart from 'react-apexcharts';
import { useState } from "react";

type TimeComponentProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const TimeComponent: React.FC<TimeComponentProps> = ({ children, active, onClick }) => (
  <div
    className={`self-stretch my-auto px-3 py-1.5 ${
      active ? "text-white bg-gray-600" : ""
    } rounded-[100px] cursor-pointer`}
    onClick={onClick}
  >
    {children}
  </div>
);
export const TradeDetails: React.FC = () => {

  const [activeTimeComponent, setActiveTimeComponent] = useState<string>("time");

  return (
    <section className="flex flex-col font-medium rounded-lg border border-solid bg-bgDark-700 border-bgDark-500 max-w-[909px]">
      <nav className="flex gap-5 justify-between p-4 w-full text-sm leading-4 text-gray-400 rounded-lg border border-solid bg-bgDark-700 border-bgDark-500 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 py-0.5 max-md:flex-wrap">
          <div className="flex flex-auto gap-5 justify-between items-center whitespace-nowrap">
            <TimeComponent active={activeTimeComponent === 'time'} onClick={() => setActiveTimeComponent('time')}>Time</TimeComponent>
            <TimeComponent active={activeTimeComponent === '1h'} onClick={() => setActiveTimeComponent('1h')}>1H</TimeComponent>
            <TimeComponent active={activeTimeComponent === '2h'} onClick={() => setActiveTimeComponent('2h')}>2H</TimeComponent>
            <TimeComponent active={activeTimeComponent === '4h'} onClick={() => setActiveTimeComponent('4h')}>4H</TimeComponent>
            <TimeComponent active={activeTimeComponent === '1d'} onClick={() => setActiveTimeComponent('1d')}>1D</TimeComponent>
            <TimeComponent active={activeTimeComponent === '1w'} onClick={() => setActiveTimeComponent('1w')}>1W</TimeComponent>
            <TimeComponent active={activeTimeComponent === '1m'} onClick={() => setActiveTimeComponent('1m')}>1M</TimeComponent>
          </div>
          <div className="flex flex-auto gap-2 items-center">
            <div className="flex gap-3 self-stretch py-1.5 pl-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f851fa50b9c00050c2fc1e79f9e290f0e962bb6a964e5dcdecbf45b1184a236d?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&"
                className="shrink-0 w-4 aspect-square"
                alt=""
              />
            </div>
            <Divider />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26bc23327afddb107afec91c67f06ae05b129cea93766808fc0cc2da6e856646?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&"
              className="shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <Divider />
            <div className="self-stretch my-auto">Fx Indicators</div>
            <Divider />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/61bc4b50cc0971c009f1871b480a06d75a0b48518fb13ad1bef46a3e4657bfc6?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&"
              className="shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12e0ad88358c08f04ae9ebc7b7fc168e40acc2bf0a67a8ca742e323c9982f279?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&"
              className="shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
            <Divider />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd2d3afec0e7eab01d4acebb396e76e0b42877ab9b82be3fe14e77bf6f4f77d2?apiKey=fb4b52cf227a4e33b8fa19f67d841da1&"
          className="shrink-0 self-start w-5 aspect-square mt-3"
          alt=""
        />
      </nav>
      <div className="w-full bg-neutral-800 min-h-[1px] max-md:max-w-full" />
      <main className="text-xs leading-4 text-white min-h-[496px] pt-20">
        <div id="chart">
          <ReactApexChart options={CartDataOptions} series={series} type="candlestick" />
        </div>
      </main>
    </section>
  );
};