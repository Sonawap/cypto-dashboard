import { Header } from "@/components/layout";
import WalletViews from "@/views/wallet-views";
import { Routes, Route, } from "react-router-dom";


export const WalletLayout = () => {
	return (
		<>
			<div className="dashboard-container">
				<div className='dashboard-wrapper'>
					<Header />
					<Routes>
						<Route path="/*" element={<WalletViews />} />
					</Routes>
				</div>
			</div>
		</>
	)
}