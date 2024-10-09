import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.components";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</div>
	);
}

export default App;
