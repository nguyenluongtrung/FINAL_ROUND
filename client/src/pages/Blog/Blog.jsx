import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import '../Blog/Blog.css'
import { LuDot } from "react-icons/lu";
import { IoAddCircleSharp } from "react-icons/io5";

export const Blog = () => {
    return (
        <div>

            <div className="grid grid-cols-3 gap-6 p-6">
                <div className="col-span-2 max-h-96">
                    <div className="flex items-center p-6 rounded-lg bg-white">
                        <h1 className="text-5xl font-bold text-gray-800 italic">
                            Tốt nhất trong tuần
                        </h1>
                        <div className="flex items-center mt-5  text-blue-500 hover:text-blue-800 cursor-pointer ml-4">
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
                <div className="grid grid-rows-2 gap-4 mt-6 ">
                    <div className="rounded-lg bg-white shadow-md">
                        <img
                            className="rounded-xl w-full h-full object-cover"
                            src="https://data.vietchem.com.vn/labvietchem/2021/11/mau-ngoc-lam-la-mau-gi.jpg"
                            alt="Image 1"
                        />
                        <div className="flex rounded-full absolute border border-black
                     text-black top-28 ml-8 justify-center items-center w-fit pr-2  ">
                            <LuDot /> ADS
                        </div>
                        <IoAddCircleSharp className="absolute text-black top-24 right-10 w-12 h-12" />
                        <p className="block font-semibold absolute top-36 text-lg ml-8">
                            Become A
                            <span className="block">BROADCAST MEMBER</span>
                        </p>
                        <p className=" block font-bold text-3xl absolute top-48 ml-8 mt-5">Real talk in a
                            <span className="block"> corporate world </span> </p>
                        <a className="absolute top-80 mt-10 right-20 text-base font-bold hover:text-blue-700">Xem thêm</a>

                    </div>
                    <div className="rounded-lg bg-white shadow-md">
                        <img
                            className="rounded-xl w-full h-full object-cover"
                            src="https://img.freepik.com/free-photo/black-painted-wall-textured-background_53876-110728.jpg"
                            alt="Image 2"
                        />
                        <div className="absolute bottom-56 right-10 w-12 h-12 rounded-full flex items-center justify-center border border-white">
                            <p className="text-white font-bold">24</p>
                        </div>
                        <div className="flex items-center absolute bottom-4 right-36 bg-gray-300 hover:bg-slate-50 h-16 px-4 py-2 rounded-full shadow-lg cursor-pointer">
                            <span className="mr-2 font-medium text-black">
                                Xem tất cả bài viết
                            </span>
                            <FaLongArrowAltRight className="text-2xl text-black" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl  mx-auto ">
                <div class="flex items-start p-4 border border-gray-200 bg-white shadow-lg rounded-lg mb-4">
                    <img class="w-60 h-48 object-cover rounded-lg mr-4" src="https://data.vietchem.com.vn/labvietchem/2021/11/mau-ngoc-lam-la-mau-gi.jpg" alt="Image 3" />
                    <div class="flex flex-col justify-between">
                        <div>
                            <span class="text-sm text-gray-500">1 phút trước</span>
                            <strong class="block text-lg font-semibold mt-1">Điện thoại gập Samsung Galaxy Z Fold 5 ra mắt: Thiết kế siêu mỏng siêu nhẹ, tích hợp AI "xịn xò", giá bán lên đến 55 triệu đồng</strong>
                        </div>
                        <span class="text-blue-500 cursor-pointer hover:underline mt-2">Xem thêm</span>
                    </div>
                </div>

                <div class="flex items-start p-4 border border-gray-200 bg-white shadow-lg rounded-lg">
                    <img class="w-60 h-48 object-cover rounded-lg mr-4" src="https://data.vietchem.com.vn/labvietchem/2021/11/mau-ngoc-lam-la-mau-gi.jpg" alt="Image 3" />
                    <div class="flex flex-col justify-between">
                        <div>
                            <span class="text-sm text-gray-500">1 phút trước</span>
                            <strong class="block text-lg font-semibold mt-1">Điện thoại gập Samsung Galaxy Z Fold 5 ra mắt: Thiết kế siêu mỏng siêu nhẹ, tích hợp AI "xịn xò", giá bán lên đến 55 triệu đồng</strong>
                        </div>
                        <span class="text-blue-500 cursor-pointer hover:underline mt-2">Xem thêm</span>
                    </div>
                </div>
             
            </div>


        </div>
    );
};
