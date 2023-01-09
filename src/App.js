import { useSelector } from "react-redux";
import { LoginPage } from "./routes";
import { Header, TaskInfo } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
			<TaskInfo />
		</>
	);
};

export default App;
