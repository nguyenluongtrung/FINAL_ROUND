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
import { FaCampground } from 'react-icons/fa';

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
			<Link to="/home">
          <p className="text-primary font-bold logo-text pt-2 flex items-center">FuHub <FaCampground className="ml-2 size-8" /></p>
        </Link>
        <ul className="navbar-menu flex text-gray normal-text pt-2">
          <li className="mr-10 dropdown">
            <Link to={""}>
              <span className="dropbtn">
                Trang chủ
              </span>
            </Link>
          </li>
          <li className="mr-10">
            <Link to={"/blogs"}>
              <span>Blogs</span>
            </Link>
          </li>
          <li className="mr-10">
            <Link to={"/discussions"}>
              <span>Diễn đàn</span>
            </Link>
          </li>
          {account?.role === "Admin" && (
            <li className="mr-5">
              <Link to={"/admin-blog"}>
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
