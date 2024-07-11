import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
const App = () => {
	return (
		<Router>
			<AppContent/>
		</Router>
	);
};

const AppContent = () => {
	return (
		<div className="app-container select-none bg-white">
			<div className="content-container select-none">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
