import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAccountInformation,
	logout,
	reset,
} from '../../features/auth/authSlice';

export const Header = () => {
	const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);
	const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
	const [showHeader, setShowHeader] = useState(true);

	const { account } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getAccountInformation());
	}, [dispatch]);


	const onLogout = () => {
		navigate('/home');
		dispatch(logout());
		dispatch(reset());
	};



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
