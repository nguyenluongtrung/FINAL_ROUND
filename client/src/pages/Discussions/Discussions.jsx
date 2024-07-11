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
import { getAllDiscussions, getAllDiscussionsByTopic } from '../../features/discussions/discussionSlice';
import { Spinner } from './../../components/Spinner/Spinner';
import { DiscussionDetail } from './DiscussionDetail/DiscussionDetail';
import avatar from './../../assets/male3-512.webp'

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

    const handleGetDiscussionsByTopic = async (topic) => {
        const response = await dispatch(getAllDiscussionsByTopic(topic));
		setDiscussions(response.payload);
    }

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
							className="bg-primary text-white rounded-xl px-5 py-2 w-full"
							onClick={() => setIsCreateDiscussionOpen(true)}
						>
							Tạo thảo luận
						</button>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-gray-200 transition duration-300 cursor-pointer">
							<MdFiberNew className="text-red-500 bg-red-200 rounded-full w-7 h-7 p-1" />
							<h3 className="text-base font-bold">Newest and Recent</h3>
						</div>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-gray-200 transition duration-300 cursor-pointer">
							<BsPostcardHeartFill className="text-green-500 bg-green-200 rounded-full w-7 h-7 p-1" />
							<h3 className="text-base font-bold">Popular of the day</h3>
						</div>
						<div className="flex items-center p-3 rounded-md gap-2 hover:bg-gray-200 transition duration-300 cursor-pointer">
							<FaUser className="text-blue-500 bg-blue-200 rounded-full w-7 h-7 p-1" />
							<h3 className="text-base font-bold">Following</h3>
						</div>
					</div>

					<div
						className={`bg-white ${
							isDarkMode ? 'bg-dark' : 'bg-light'
						} mt-4 p-6 rounded-lg shadow-lg`}
					>
						<h2 className="text-base font-semibold mb-3">Chủ đề phổ biến</h2>
						<div>
							<div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg hover:cursor-pointer" onClick={() => handleGetDiscussionsByTopic('AI')}>
								<GiArtificialIntelligence className="mr-2 text-blue-500 w-8 h-8" />
								<p>Trí thông minh nhân tạo (AI)</p>
							</div>
							<div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg hover:cursor-pointer" onClick={() => handleGetDiscussionsByTopic('Bán dẫn')}>
								<SiNordicsemiconductor className="mr-2 text-green-500 w-8 h-8" />
								<p>Bán dẫn</p>
							</div>
							<div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg hover:cursor-pointer" onClick={() => handleGetDiscussionsByTopic('FPT')}>
								<img src={logoFPT} className="w-8 h-8 mr-2" alt="FPT Logo" />
								<p>Đại học FPT</p>
							</div>
							<button
								className="flex items-center w-full justify-center text-sm
                             text-white font-semibold rounded-md p-2
                              bg-orange-500 hover:bg-orange-600 transition duration-300"
							>
								Đăng tin
								<FaPenSquare className="mt-1 ml-2" />
							</button>
						</div>
					</div>
				</div>

				<div className="p-4">
					{!chosenDiscussion && isCreateDiscussionOpen && <CreateDiscussion fetchAllDiscussions={fetchAllDiscussions}/>}
					{chosenDiscussion && (
						<DiscussionDetail chosenDiscussion={chosenDiscussion} fetchAllDiscussions={fetchAllDiscussions} setChosenDiscussion={setChosenDiscussion}/>
					)}
					{!chosenDiscussion && (
						<button className="text-white bg-primary rounded-md px-5 py-1.5 mt-5">
							Bài thảo luận mới nhất
						</button>
					)}
					{!chosenDiscussion &&
						discussions?.map((discussion) => {
							return (
								<>
									<div
										className="pt-4 mt-4 cursor-pointer"
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
													<strong>Pavel Gvay</strong>
													<p className="text-sm text-gray-500 ml-2">
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
						{discussions?.map((discussion) => {
							return (
								<div className="p-2 rounded-lg mb-3 shadow-lg">
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

										<p className=" mt-3 text-sm flex items-center gap-1">{discussion.loveCount} <FaRegHeart size={10} /></p>
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
							<p className="text-blue-500 font-semibold hover:text-blue-900 cursor-pointer">
								Tất cả
							</p>
						</div>
						<div className="flex items-center space-x-4 mb-4">
							<img
								alt="avatar"
								src={avatar}
								className="rounded-full border w-8 h-8"
							/>
							<div>
								<strong className="block">Mark Wazauiski</strong>
								<p className="text-gray-400">@markwazauz</p>
							</div>
							<div className="ml-auto flex items-center rounded-full border border-blue-500 transition duration-300">
								<IoIosAdd className="text-blue-400 text-2xl ml-1" />
								<button className="text-blue-400 text-sm font-semibold py-1 px-2">
                                Theo dõi
								</button>
							</div>
						</div>
						<div className="flex items-center space-x-4 mb-4">
							<img
								alt="avatar"
								src={avatar}
								className="rounded-full border w-8 h-8"
							/>
							<div>
								<strong className="block">Mark Wazauiski</strong>
								<p className="text-gray-400">@markwazauz</p>
							</div>
							<div className="ml-auto flex items-center rounded-full border border-blue-500 transition duration-300">
								<IoIosAdd className="text-blue-400 text-2xl ml-1" />
								<button className="text-blue-400 text-sm font-semibold py-1 px-2">
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
						<div className="flex items-center gap-2 mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-green-500" />
							<span className="font-semibold">Create New Post</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-blue-500" />
							<span className=" font-semibold">Add Friend</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-orange-500" />
							<span className="font-semibold">Join Group</span>
						</div>
						<div className="flex items-center gap-2 mb-4 hover:bg-gray-100 transition duration-300 cursor-pointer p-3">
							<IoIosAdd className="w-6 h-6 text-red-500" />
							<span className="font-semibold">Follow Page</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
