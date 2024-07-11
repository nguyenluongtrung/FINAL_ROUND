import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAccountInformation,
	logout,
	reset,
} from '../../features/auth/authSlice';
import { FaArrowRight } from 'react-icons/fa';
import { Spinner } from '../Spinner/Spinner';

export const Header = () => {
	const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);
	const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
	const [services, setServices] = useState([]);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const { account } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAccountInformation());
	}, [dispatch]);

	async function initiateServices() {
		let output = await dispatch(getAllServices());

		setServices(output.payload);
	}

	const navigateToServicePage = (id) => {
		navigate(`/job-posting/view-service-detail/${id}`);
	};

	useEffect(() => {
		initiateServices();
	}, []);

	const onLogout = () => {
		navigate('/home');
		dispatch(logout());
		dispatch(reset());
	};

	const handleScroll = () => {
		if (window.scrollY > lastScrollY) {
			// Scrolling down
			setShowHeader(false);
		} else {
			// Scrolling up
			setShowHeader(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollY]);

	if (!Array.isArray(services)) {
		return <Spinner />;
	}

	return (
		<div className={`mb-7 ${showHeader ? 'header-visible' : 'header-hidden'}`}>
			{isOpenLoginForm && <LoginPage setIsOpenLoginForm={setIsOpenLoginForm} />}
			{isOpenRegisterForm && (
				<RegisterPage
					setIsOpenRegisterForm={setIsOpenRegisterForm}
					setIsOpenLoginForm={setIsOpenLoginForm}
				/>
			)}
			<div className={`navbar-container flex justify-between px-16 py-3 ${showHeader ? 'header-background' : ''}`}>
				<Link to="/home">
					<p className="text-primary font-bold logo-text pt-2">Antidee</p>
				</Link>
				<ul className="navbar-menu flex text-gray normal-text pt-2">
					<li className="mr-5 dropdown">
						<Link to={''}>
							<span className="dropbtn">
								Dịch vụ <IoIosArrowDown className="inline" />
							</span>
						</Link>
						<div className="dropdown-content">
							{services?.map((service) => {
								return (
									<div className="shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden service-section" onClick={() => navigateToServicePage(service?._id)}>
										<div className="relative grid gap-6 bg-white px-5 py-3 sm:gap-8 sm:p-8 hover:bg-light_primary hover:text-white">
											<a
												href="#"
												className="-m-3 p-0.5 flex items-start rounded-lg hover:bg-gray-50"
											>
												<div className="ml-4 flex">
													<p className="text-base font-medium text-gray-900">
														{service.name}
														<FaArrowRight
															className="ml-3 custom-icon inline-block"
															size={13}
														/>
													</p>
												</div>
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</li>
					<li className="mr-5">
						<Link to={''}>
							<span>Về Antidee</span>
						</Link>
					</li>
					<li className="mr-5">
						<Link to={'/become-helper'}>
							<span>Trở thành người giúp việc</span>
						</Link>
					</li>
					{account?.role === 'Admin' && (
						<li className="mr-5">
							<Link to={'/admin-exam'}>
								<span>Trang quản lí</span>
							</Link>
						</li>
					)}
				</ul>
				<div className="flex">
					{account ? (
						<>
							<button
								className="header-login-btn text-primary text-center rounded-2xl font-medium w-28 border-primary border-2"
								onClick={onLogout}
							>
								<span>Đăng xuất</span>
							</button>
						</>
					) : (
						<>
							<button
								className="header-login-btn text-primary text-center rounded-2xl font-medium w-28 border-primary border-2"
								onClick={() => setIsOpenLoginForm(true)}
							>
								<span>Đăng nhập</span>
							</button>
							<button
								className="header-register-btn text-white text-center rounded-2xl font-medium w-28 ml-5 bg-primary"
								onClick={() => setIsOpenRegisterForm(true)}
							>
								<span>Đăng ký</span>
							</button>
						</>
					)}
				</div>
			</div>
			<hr className="hr-header"></hr>
		</div>
	);
};
