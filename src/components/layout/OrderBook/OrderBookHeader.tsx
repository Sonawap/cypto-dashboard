export const OrderBookHeader = () => {
  return (
    <aside className="grid grid-cols-3 gap-1">
      <div className="flex flex-col justify-center px-2.5 w-8 h-8 rounded bg-bgDark-700">
        <span className="shrink-0 h-0.5 bg-orange-500 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-gray-400 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-green-500 rounded-sm" />
      </div>
      <div className="flex flex-col justify-center px-2.5 py-3 rounded">
        <span className="shrink-0 h-0.5 bg-gray-400 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-gray-400 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-green-500 rounded-sm" />
      </div>
      <div className="flex flex-col justify-center px-2.5 py-3 rounded">
        <span className="shrink-0 h-0.5 bg-orange-500 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-gray-400 rounded-sm" />
        <span className="shrink-0 h-0.5 bg-green-500 rounded-sm" />
      </div>
    </aside>
  );
};