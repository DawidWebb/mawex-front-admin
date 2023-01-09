import { LoginPage } from "./routes";
import { Header, TaskInfo, Spinner } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
			<TaskInfo />
			<Spinner />
		</>
	);
};

export default App;
