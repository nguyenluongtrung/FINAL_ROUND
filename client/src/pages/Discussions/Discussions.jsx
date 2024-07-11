import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiNordicsemiconductor } from 'react-icons/si';
import logoFPT from '../../../public/img/logo-FPT.png';
import { FaHeart, FaUser } from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { MdFiberNew } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { BsPostcardHeartFill } from 'react-icons/bs';
import './Discussions.css';
import { useEffect, useState } from 'react';
import { CreateDiscussion } from './CreateDiscussion/CreateDiscussion';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllDiscussions,
	getAllDiscussionsByPopular,
	getAllDiscussionsByTopic,
} from '../../features/discussions/discussionSlice';
import { Spinner } from './../../components/Spinner/Spinner';
import { DiscussionDetail } from './DiscussionDetail/DiscussionDetail';
import avatar from './../../assets/male3-512.webp';
import { getAllAccounts } from '../../features/auth/authSlice';
import { formatDate } from '../../utils/format';

export const Discussions = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [accounts, setAccounts] = useState();
	const [isCreateDiscussionOpen, setIsCreateDiscussionOpen] = useState(false);
	const [isViewDetailDiscussionOpen, setIsViewDetailDiscussionOpen] =
		useState(false);
	const [chosenDiscussion, setChosenDiscussion] = useState();
	const [discussions, setDiscussions] = useState();
	const [topDiscussions, setTopDiscussions] = useState();
	const { isLoading } = useSelector((state) => state.discussions);

	const dispatch = useDispatch();

	const fetchAllDiscussions = async () => {
		const response = await dispatch(getAllDiscussions());
		setDiscussions(response.payload);
	};

	useEffect(() => {
		fetchAllDiscussions();
	}, []);

	const fetchAllTopDiscussions = async () => {
		const response = await dispatch(getAllDiscussionsByPopular());
		setTopDiscussions(response.payload);
	};

	const fetchAllAccounts = async () => {
		const response = await dispatch(getAllAccounts());
		setAccounts(response.payload);
	};

	function getUsername(email) {
		const parts = email.split('@');

		return parts[0];
	}

	useEffect(() => {
		fetchAllTopDiscussions();
	}, []);

	useEffect(() => {
		fetchAllAccounts();
	}, []);

	const handleGetDiscussionsByTopic = async (topic) => {
		const response = await dispatch(getAllDiscussionsByTopic(topic));
		setDiscussions(response.payload);
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className={`discussion ${isDarkMode ? 'dark' : 'light'} mt-16`}>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4">
				<div className="p-4">
					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} rounded-lg shadow-md p-4 space-y-2`}
					>
						<button
							className="bg-primary text-white rounded-xl px-5 py-2 w-full font-semibold	hover:bg-primary_dark fea-item"
							onClick={() => setIsCreateDiscussionOpen(true)}
						>
							Tạo thảo luận
						</button>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-primary transition duration-300 cursor-pointer hvr-shutter-in-horizontal">
							<MdFiberNew className="text-white bg-red rounded-full w-7 h-7 p-1 " />
							<div className="font-semibold">Các bài mới nhất</div>
						</div>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-primary  transition duration-300 cursor-pointer hvr-shutter-in-horizontal">
							<BsPostcardHeartFill className="text-white bg-green rounded-full w-7 h-7 p-1" />
							<div className="font-semibold">Phổ biến nhất trong ngày</div>
						</div>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-primary  transition duration-300 cursor-pointer hvr-shutter-in-horizontal">
							<FaUser className="text-white bg-blue rounded-full w-7 h-7 p-1" />
							<div className="font-semibold">Đang theo dõi</div>
						</div>
					</div>

					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} mt-4 p-6 rounded-lg shadow-lg`}
					>
						<h2 className="text-base font-semibold mb-3">Chủ đề phổ biến</h2>
						<div>
							<div
								className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal"
								onClick={() => handleGetDiscussionsByTopic('AI')}
							>
								<GiArtificialIntelligence className="mr-2 text-blue w-8 h-8" />
								<div className="font-semibold">
									Trí thông minh nhân tạo (AI)
								</div>
							</div>
							<div
								className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal"
								onClick={() => handleGetDiscussionsByTopic('Bán dẫn')}
							>
								<SiNordicsemiconductor className="mr-2 text-green w-8 h-8" />
								<div className="font-semibold">Bán dẫn</div>
							</div>
							<div
								className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal"
								onClick={() => handleGetDiscussionsByTopic('FPT')}
							>
								<img src={logoFPT} className="w-8 h-auto mr-2" alt="FPT Logo" />
								<div className="font-semibold">Đại học FPT</div>
							</div>
						</div>
						<button
							className="flex items-center w-full justify-center text-sm
                             text-white font-semibold rounded-md p-2
                              bg-orange hover:bg-orange-600 transition duration-300"
						>
							Đăng tin
							<FaPenSquare className="mt-1 ml-2" />
						</button>
					</div>
				</div>
				<div className="p-4">
					{!chosenDiscussion && isCreateDiscussionOpen && (
						<CreateDiscussion fetchAllDiscussions={fetchAllDiscussions} />
					)}
					{chosenDiscussion && (
						<DiscussionDetail
							chosenDiscussion={chosenDiscussion}
							fetchAllDiscussions={fetchAllDiscussions}
							setChosenDiscussion={setChosenDiscussion}
						/>
					)}
					{!chosenDiscussion && (
						<button className="text-white bg-primary rounded-md px-5 py-1.5 mt-5 w-56 fea-item">
							Bài thảo luận mới nhất
						</button>
					)}
					{!chosenDiscussion &&
						discussions?.map((discussion) => {
							return (
								<>
									<div
										className="pt-4 mt-4 cursor-pointer fea-item"
										onClick={() => {
											setChosenDiscussion(discussion);
											setIsViewDetailDiscussionOpen(true);
										}}
									>
										<div
											className={`relative flex flex-col sm:flex-row ${
												isDarkMode ? 'bg-dark' : 'bg-light'
											} rounded-lg shadow-lg p-4 mb-2`}
										>
											<img
												src={discussion.image}
												alt="mô tả post"
												className="w-full sm:w-40 h-40 mr-3 border-none object-cover rounded-lg mb-4 sm:mb-0"
											/>
											<div className="flex-1">
												<div className="flex justify-between mb-2">
													<strong className="text-base mr-2 mt-2">
														{discussion?.title}
													</strong>
													<div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600 mb-4">
														{discussion.topics.map((topic) => {
															return (
																<span className="bg-primary px-4 py-1 rounded-md text-white">
																	{topic}
																</span>
															);
														})}
													</div>
												</div>

												<div className="flex items-center mb-2">
													<img
														src={avatar}
														alt=""
														className="w-8 h-8 rounded-full mr-2"
													/>
													<p className="font-semibold">
														{discussion?.accountId?.name}
													</p>
													<p className="text-sm text-gray ml-2">
														{formatDate(discussion.createdAt)}
													</p>
												</div>
												<div className="flex gap-10 text-sm mt-3">
													<span>{discussion?.loveCount} yêu thích</span>
													<span>{discussion?.comments?.length} bình luận</span>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
				</div>
				<div className="p-4">
					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} p-4 mt-4 rounded-lg shadow-md`}
					>
						<strong className="text-base font-bold block mb-4">
							Thảo luận hàng đầu
						</strong>
						{topDiscussions?.map((discussion) => {
							return (
								<div className="p-2 rounded-lg mb-3 border border-light_gray hover:bg-light_gray cursor-pointer">
									<p className="text-base font-semibold mb-3">
										{discussion.title}
									</p>
									<div>
										{discussion.topics.map((topic) => {
											return (
												<span className="bg-primary mr-3 px-4 py-1 rounded-md text-white">
													{topic}
												</span>
											);
										})}

										<div className="flex justify-between items-center">
											<p className=" mt-3 text-sm flex items-center gap-1">
												{discussion.loveCount}{' '}
												<FaHeart className="mt-1" size={15} color="red" />
											</p>
											<p className="text-sm text-gray mt-2">
												{formatDate(discussion.createdAt)}
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} p-4 mt-4 rounded-lg shadow-md`}
					>
						<div className="flex justify-between gap-10">
							<strong className="text-base font-bold block mb-4">
								Lượt truy cập người dùng
							</strong>
							<p className="text-blue font-semibold hover:text-blue-900 cursor-pointer">
								Tất cả
							</p>
						</div>
						<div className="mb-4">
							{accounts?.map((acc) => {
								return (
									<div className="flex items-center mb-4">
										<img
											alt="avatar"
											src={acc.avatar}
											className="rounded-full border w-8 h-8"
										/>
										<div className="ml-4">
											<p className="block font-semibold">{acc.name}</p>
											<p className="text-gray">#{getUsername(acc.email)}</p>
										</div>
										<div className="ml-auto flex items-center rounded-full border border-blue text-blue hover:bg-blue hover:text-white">
											<IoIosAdd className=" text-2xl ml-1" />
											<button className=" text-sm font-semibold py-1 px-2">
												Theo dõi
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
