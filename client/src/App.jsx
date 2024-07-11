import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { Discussions } from './pages/Discussions/Discussions';
import { Blog } from './pages/Blog/Blog';
import { BlogManagement } from './pages/AdminPage/BlogPage/BlogManagement';
import 'aos/dist/aos.css';
import {SeeMore} from './pages/Blog/SeeMore/SeeMore'
const App = () => {
	return (
		<Router>
			<AppContent />
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
						<Route path="/discussions" element={<Discussions />} />
						<Route path="/blogs" element={<Blog />} />
						<Route path="/admin-blog" element={<BlogManagement />} />
						<Route path="/see-more" element={<SeeMore />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
