import { AccountSummaryType } from "../Pair";

type AccountSummaryProps = {
  values: AccountSummaryType[];
};

export const AccountSummary: React.FC<AccountSummaryProps> = ({ values }) => (
  <>
    <section className="account-summary flex gap-5 justify-between mt-5 text-gray-400 leading-[133%] max-md:mr-2">
      <div className="account-summary__item flex flex-col">
        <label htmlFor="totalAccountValue">Total account value</label>
        <span id="totalAccountValue" className="account-summary__value mt-3.5 text-sm font-bold leading-4 text-white">
          0.00
        </span>
      </div>
      <div className="account-summary__item flex flex-col">
        <label htmlFor="totalAccountValue">NGN</label>
      </div>
    </section>
    <section className="account-summary flex gap-5 justify-between mt-5 text-gray-400 leading-[133%] max-md:mr-2">
      {values.map((item) => (
        <div key={item.label} className="account-summary__item flex flex-col">
          <label htmlFor={item.label}>{item.label}</label>
          <span id={item.label} className="account-summary__value mt-3.5 text-sm font-bold leading-4 text-white">
            {item.value}
          </span>
        </div>
      ))}
    </section>
  </>
);