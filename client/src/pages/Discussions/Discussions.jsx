import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiNordicsemiconductor } from 'react-icons/si';
import logoFPT from '../../../public/img/logo-FPT.png';
import { FaUser } from 'react-icons/fa';
import { CiCircleMore } from 'react-icons/ci';
import { FaPenSquare } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosAdd } from 'react-icons/io';
import { MdFiberNew } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { BsPostcardHeartFill } from 'react-icons/bs';
import './Discussions.css';
import { useEffect, useState } from 'react';
import { CreateDiscussion } from './CreateDiscussion/CreateDiscussion';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDiscussions } from '../../features/discussions/discussionSlice';
import { Spinner } from './../../components/Spinner/Spinner';
import { DiscussionDetail } from './DiscussionDetail/DiscussionDetail';

export const Discussions = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isCreateDiscussionOpen, setIsCreateDiscussionOpen] = useState(false);
	const [isViewDetailDiscussionOpen, setIsViewDetailDiscussionOpen] =
		useState(false);
	const [chosenDiscussion, setChosenDiscussion] = useState();
	const [discussions, setDiscussions] = useState();
	const { isLoading } = useSelector((state) => state.discussions);

	const dispatch = useDispatch();

	const fetchAllDiscussions = async () => {
		const response = await dispatch(getAllDiscussions());
		setDiscussions(response.payload);
	};

	useEffect(() => {
		fetchAllDiscussions();
	}, []);

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
						<h2 className="text-base font-bold mb-6">Chủ đề phổ biến</h2>
						<div>
							<div className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal">
								<GiArtificialIntelligence className="mr-2 text-blue w-8 h-8" />
								<div className='font-semibold'>Trí thông minh nhân tạo (AI)</div>
							</div>
							<div className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal">
								<SiNordicsemiconductor className="mr-2 text-green w-8 h-8" />
								<div className='font-semibold'>Bán dẫn</div>
							</div>
							<div className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal">
								<img src={logoFPT} className="w-8 h-auto mr-2" alt="FPT Logo" />
								<div className='font-semibold'>Đại học FPT</div>
							</div>
							<div className="flex items-center mb-4 hover:bg-primary p-2 rounded-lg cursor-pointer hvr-shutter-in-horizontal">
								<CiCircleMore className="mr-2 w-8 h-8 text-purple" />
								<div className='font-semibold'>More</div>
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
				</div>

				<div className="p-4">
					{isCreateDiscussionOpen && <CreateDiscussion />}
					{chosenDiscussion && (
						<DiscussionDetail chosenDiscussion={chosenDiscussion} />
					)}
					<button className="text-white bg-primary rounded-md px-5 py-1.5 mt-5 fea-item">
						Bài thảo luận mới nhất
					</button>
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
												src={logoFPT}
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
														src=""
														alt=""
														className="w-8 h-8 rounded-full mr-2"
													/>
													<strong>Pavel Gvay</strong>
													<p className="text-sm text-gray ml-2">
														3 weeks ago
													</p>
												</div>
												<div className="flex gap-10 text-sm">
													<span>651,324 Views</span>
													<span>36,654 Likes</span>
													<span>56 comments</span>
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
						<div className="flex justify-between items-center p-2 rounded-lg mb-3 border border-light_gray hover:bg-light_gray cursor-pointer">
							<div>
								<p className="text-sm">Business & finance</p>
								<strong className="text-base">Telegram</strong>
								<p className=" text-sm ">936K posts</p>
							</div>
							<BsThreeDots />
						</div>
						<div className="flex justify-between items-center p-2 rounded-lg mb-3 border border-light_gray hover:bg-light_gray cursor-pointer">
							<div>
								<p className=" text-sm">Business & finance</p>
								<strong className="text-base">Telegram</strong>
								<p className=" text-sm ">936K posts</p>
							</div>
							<BsThreeDots />
						</div>
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
						<div className="flex items-center justify-center mb-4">
							<img
								alt="avatar"
								src=""
								className="rounded-full border w-8 h-8"
							/>
							<div className='ml-4'>
								<strong className="block">Mark Wazauiski</strong>
								<p className="text-gray">@markwazauz</p>
							</div>
							<div className="ml-auto flex items-center rounded-full border border-blue text-blue hover:bg-blue hover:text-white">
								<IoIosAdd className="text-2xl ml-1" />
								<button className="text-sm font-semibold py-1 px-2">
									Theo dõi
								</button>
							</div>
						</div>
						<div className="flex items-center mb-4">
							<img
								alt="avatar"
								src=""
								className="rounded-full border w-8 h-8"
							/>
							<div className='ml-4'>
								<strong className="block">Mark Wazauiski</strong>
								<p className="text-gray">@markwazauz</p>
							</div>
							<div className="ml-auto flex items-center rounded-full border border-blue text-blue hover:bg-blue hover:text-white">
								<IoIosAdd className=" text-2xl ml-1" />
								<button className=" text-sm font-semibold py-1 px-2">
									Theo dõi
								</button>
							</div>
						</div>
					</div>
					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} p-4 mt-4 rounded-lg shadow-md`}
					>
						<h3 className="font-bold mb-4">Tìm hiểu thêm</h3>
						<div className="flex items-center gap-2 mb-4 hover:bg-primary hover:text-white rounded-lg transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-green" />
							<span className="font-semibold">Create New Post</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-primary hover:text-white rounded-lg transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-blue" />
							<span className=" font-semibold">Add Friend</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-primary hover:text-white rounded-lg transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-orange" />
							<span className="font-semibold">Join Group</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-primary hover:text-white rounded-lg transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-red" />
							<span className="font-semibold">Follow Page</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
