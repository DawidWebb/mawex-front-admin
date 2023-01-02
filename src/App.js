import { NavigationComponent } from "./routes";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<NavigationComponent />}>
					{/* <Route index element={<Home />} /> */}
				</Route>
			</Routes>
		</>
	);
};

export default App;
