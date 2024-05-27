import { Footer, Header } from "@/components/layout";
import DashboardViews from "@/views/dashboard-views";
import { Routes, Route, } from "react-router-dom";


export const DashboardLayout = () => {
	return (
		<>
			<div className="dashboard-container">
				<div className='dashboard-wrapper'>
					<Header />
					<Routes>
						<Route path="/*" element={<DashboardViews />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</>
	)
}