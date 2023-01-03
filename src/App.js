import { useSelector } from "react-redux";
import { LoginPage } from "./routes";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
	const userLogin = useSelector((store) => store.user);
	const session = useSelector((store) => store.session);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</>
	);
};

export default App;
