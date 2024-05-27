import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "@/components/Elements";

const Wallet = lazy(() => import('./Wallet'));

const WalletViews = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={<Wallet title="Wallet" />}
        />
      </Routes>
    </Suspense>
  );
};

export default WalletViews;
