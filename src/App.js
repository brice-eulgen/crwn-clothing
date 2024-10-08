import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
	return (
		<div>
			<h1>HATS PAGE</h1>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	);
}

export default App;
