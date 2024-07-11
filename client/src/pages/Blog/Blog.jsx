import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import '../Blog/Blog.css'
import { LuDot } from "react-icons/lu";
import { IoAddCircleSharp } from "react-icons/io5";

export const Blog = () => {
    return (
        <div className="grid grid-cols-3 gap-6 p-6">
            <div className="col-span-2">
                <div className="flex items-center p-6 rounded-lg bg-white shadow-md">
                    <h1 className="text-5xl font-bold text-gray-800 italic">
                        Tốt nhất trong tuần
                    </h1>
                    <div className="flex items-center text-blue-500 cursor-pointer ml-4">
                        <p className="text-sm mr-2">Xem tất cả</p>
                        <FaLongArrowAltRight className="text-2xl" />
                    </div>
                </div>
                <div className="overflow-hidden relative mt-4 rounded-lg bg-gray-100 shadow-md">
                    <img
                        className="w-full h-[570px] rounded-xl object-cover"
                        src="https://img.freepik.com/free-photo/black-painted-wall-textured-background_53876-110728.jpg"
                        alt="Travel Pro"
                    />
                    <div className="absolute top-10 left-10 w-28 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        Sep 06, 2022
                    </div>
                    <div className="absolute top-20 left-10 w-28 text-white text-center border border-white rounded-full px-3 py-1 text-sm font-semibold">
                        Travel
                    </div>
                    <div className="absolute top-20 right-10 bg-white bg-opacity-90 rounded-lg p-4">
                        <div className="text-sm font-semibold text-gray-700 mb-1">
                            Travel
                        </div>
                        <div className="w-80 text-2xl font-bold text-black">
                            Get to your dream destinations now with Travel Pro
                        </div>
                    </div>
                    <div className="rotate-[-45deg] absolute bottom-4 right-4 bg-white bg-opacity-70 rounded-full p-2 mr-2 mb-2">
                        <FaCircleArrowRight className="w-8 h-8" />
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-2 gap-4 mt-16">
                <div className="rounded-lg bg-white shadow-md">
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src="https://img.freepik.com/free-photo/black-painted-wall-textured-background_53876-110728.jpg"
                        alt="Image 1"
                    />
                    <div className="flex rounded-full absolute border border-white
                     text-white top-28 ml-8 justify-center items-center w-fit pr-2  ">
                    <LuDot /> ADS
                    </div>
                    <IoAddCircleSharp  className="absolute text-white top-24 right-10 w-12 h-12" />
                </div>
                <div className="rounded-lg bg-white shadow-md">
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src="https://img.freepik.com/free-photo/black-painted-wall-textured-background_53876-110728.jpg"
                        alt="Image 2"
                    />
                    <div className="absolute text-white border bottom-6 w-12 h-12 rounded-full">
                        <p className="flex justify-center mt-2">24</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
