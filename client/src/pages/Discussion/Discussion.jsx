import { GiArtificialIntelligence } from "react-icons/gi";
import { SiNordicsemiconductor } from "react-icons/si";
import logoFPT from "../../../public/img/logo-FPT.png";
import { FaUser } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { FaPenSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { MdFiberNew } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsPostcardHeartFill } from "react-icons/bs";
import './Discussion.css';
import { useState } from "react";

export const Discussion = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`discussion ${isDarkMode ? 'dark' : 'light'}`}>
            <button
                onClick={toggleTheme}
                className="p-2 mb-4 bg-gray-800 text-white rounded"
            >
                Toggle Dark Mode
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-4">
                <div className="p-4">
                    <div className={`bg-white ${isDarkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-md p-4 space-y-2`}>
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

                    <div className={`bg-white ${isDarkMode ? 'bg-dark' : 'bg-light'} mt-4 p-6 rounded-lg shadow-lg`}>
                        <h2 className="text-base font-bold mb-6">Chủ đề phổ biến</h2>
                        <div>
                            <div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg">
                                <GiArtificialIntelligence className="mr-2 text-blue-500 w-8 h-8" />
                                <strong>Trí thông minh nhân tạo (AI)</strong>
                            </div>
                            <div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg">
                                <SiNordicsemiconductor className="mr-2 text-green-500 w-8 h-8" />
                                <strong>Bán dẫn</strong>
                            </div>
                            <div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg">
                                <img src={logoFPT} className="w-8 h-8 mr-2" alt="FPT Logo" />
                                <strong>Đại học FPT</strong>
                            </div>
                            <div className="flex items-center mb-4 hover:bg-slate-300 p-2 rounded-lg">
                                <CiCircleMore className="mr-2 w-8 h-8 text-purple-500" />
                                <strong>More</strong>
                            </div>
                            <button className="flex items-center w-full justify-center text-sm
                             text-white font-semibold rounded-md p-2
                              bg-orange-500 hover:bg-orange-600 transition duration-300">
                                Đăng tin
                                <FaPenSquare className="mt-1 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className={`flex flex-col sm:flex-row items-center ${isDarkMode ? 'bg-dark' : 'bg-light'} mb-4 p-4 rounded-lg shadow-lg`}>
                        <img src="" alt="avatar" className="border w-8 h-8 rounded-full mr-2" />
                        <input
                            placeholder="Chia sẻ cảm nghĩ của bạn"
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Đăng bài
                        </button>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <div className={`relative flex flex-col sm:flex-row border ${isDarkMode ? 'bg-dark' : 'bg-light'} rounded-lg shadow-lg p-4 mb-2`}>
                            <img src={logoFPT} alt="mô tả post" className="w-full sm:w-40 h-40 mr-3 border object-cover rounded-lg mb-4 sm:mb-0" />
                            <FaRegHeart className="text-red-500 absolute top-0 right-0 m-2" />
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <strong className="text-base mr-2">Blockchain developer best practices on innovationchain</strong>
                                </div>
                                <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                                    <span className="bg-gray-200 px-2 py-1 rounded">finance</span>
                                    <span className="bg-gray-200 px-2 py-1 rounded">bitcoin</span>
                                    <span className="bg-gray-200 px-2 py-1 rounded">crypto</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <img src="" alt="" className="w-8 h-8 rounded-full mr-2" />
                                    <strong>Pavel Gvay</strong>
                                    <p className="text-sm text-gray-500 ml-2">3 weeks ago</p>
                                </div>
                                <div className="flex gap-10 text-sm">
                                    <span>651,324 Views</span>
                                    <span>36,654 Likes</span>
                                    <span>56 comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className={`bg-white ${isDarkMode ? 'bg-dark' : 'bg-light'} p-4 mt-4 rounded-lg shadow-md`}>
                        <strong className="text-base font-bold block mb-4">Thảo luận hàng đầu</strong>
                        <div className="flex justify-between items-center p-2 rounded-lg mb-3 border">
                            <div>
                                <p className=" text-sm">Business & finance</p>
                                <strong className="text-base  ">Telegram</strong>
                                <p className=" text-sm ">936K posts</p>
                            </div>
                            <BsThreeDots />
                        </div>
                        <div className="flex justify-between items-center p-2 rounded-lg mb-3 border">
                            <div>
                                <p className=" text-sm">Business & finance</p>
                                <strong className="text-base  ">Telegram</strong>
                                <p className=" text-sm ">936K posts</p>
                            </div>
                            <BsThreeDots />
                        </div>
                    </div>
                    <div className={`bg-white ${isDarkMode ? 'bg-dark' : 'bg-light'} p-4 mt-4 rounded-lg shadow-md`}>
                        <div className="flex justify-between gap-10">
                            <strong className="text-base font-bold block mb-4">Lượt truy cập người dùng</strong>
                            <p className="text-blue-500 font-semibold hover:text-blue-900 cursor-pointer">Tất cả</p>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <img alt="avatar" src="" className="rounded-full border w-8 h-8" />
                            <div>
                                <strong className="block">Mark Wazauiski</strong>
                                <p className="text-gray-400">@markwazauz</p>
                            </div>
                            <div className="ml-auto flex items-center rounded-full border border-blue-500 transition duration-300">
                                <IoIosAdd className="text-blue-400 text-2xl ml-1" />
                                <button className="text-blue-400 text-sm font-semibold py-1 px-2">
                                    Follow
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                            <img alt="avatar" src="" className="rounded-full border w-8 h-8" />
                            <div>
                                <strong className="block">Mark Wazauiski</strong>
                                <p className="text-gray-400">@markwazauz</p>
                            </div>
                            <div className="ml-auto flex items-center rounded-full border border-blue-500 transition duration-300">
                                <IoIosAdd className="text-blue-400 text-2xl ml-1" />
                                <button className="text-blue-400 text-sm font-semibold py-1 px-2">
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-white ${isDarkMode ? 'bg-dark' : 'bg-light'} p-4 mt-4 rounded-lg shadow-md`}>
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
