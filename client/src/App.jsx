import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { Discussion } from './pages/Discussion/Discussion';
import {Blog} from './pages/Blog/Blog'


import { BlogManagement } from './pages/AdminPage/BlogPage/BlogManagement';
const App = () => {
	return (
		<Router>
			<AppContent/>
		</Router>
	);
};

const AppContent = () => {
	const { pathname } = useLocation();
	const isAdminPage = pathname.startsWith('/admin');
	return (
		<div className="app-container select-none bg-white">
			<div className="content-container select-none">
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/discussion" element={<Discussion/>}/>
						<Route path="/blog" element={<Blog />}/>
						<Route
								path="/admin-blog" element={<BlogManagement />}
							/>
					</Route>
				</Routes>
				{/* {isAdminPage && (
						<>
							<Route
								path="/admin-blog" element={<BlogManagement />}
							/>
							
						</>
					)} */}
			</div>
		</div>
	);
};

export default App;
