import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
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
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/sign-up" element={<SignUpPage />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
