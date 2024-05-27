import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "@/components/Elements";
import { Pair } from "@/components/layout";

const DashBoard = lazy(() => import('./Dashboard'));

const DashboardViews = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='p-2'>
        <Pair />
      </div>
      <Routes>
        <Route
          path="/"
          element={<DashBoard title="Dashboard" />}
        />
      </Routes>
    </Suspense>
  );
};

export default DashboardViews;
