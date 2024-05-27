import { Route, Routes } from "react-router-dom";
// import Error404 from "@/views/errors/404";
import { DashboardLayout } from "@/layouts/dashboard-layout/Dashboard";
import AppProvider from "@/providers/AppProvider";
import { WALLET_PREFIX_PATH } from "@/config";
import { WalletLayout } from "@/layouts/wallet-layout";

const Views = () => {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route
            path={`/*`}
            element={
              <DashboardLayout />
            }
          />
          <Route
            path={`${WALLET_PREFIX_PATH}/*`}
            element={
              <WalletLayout />
            }
          />
          {/* <Route path="*" element={<Error404 title="Page not found" />} /> */}
        </Routes>
      </AppProvider>
    </>
  );
};


export default Views;
