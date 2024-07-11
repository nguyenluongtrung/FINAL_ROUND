import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import '../Blog/Blog.css'

import { useEffect, useState } from "react";
import { getAllBlogs } from "../../features/blogs/blogSlice";
import { useDispatch } from "react-redux";
import { formatDate } from "../../utils/format";

export const Blog = () => {
    const dispatch = useDispatch();
    const [blogs, setBlog] = useState([]);
    console.log(blogs);

    async function initialBlogList() {
        let output = await dispatch(getAllBlogs());

        setBlog(output.payload);
    }
    useEffect(() => {
        initialBlogList();
    }, [])
    return (
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-6 p-6 mb-10 ">
                <div className="col-span-2 max-h-96">
                    <div className="flex items-center p-6 rounded-lg bg-white">
                        <h1 className="text-5xl font-bold text-black italic">
                            Tốt nhất trong tuần
                        </h1>
                        <div className="flex items-center mt-5  text-blue hover:text-primary cursor-pointer ml-4">
                            <p className="text-base mr-2">Xem tất cả</p>
                            <FaLongArrowAltRight className="text-2xl" />
                        </div>
                    </div>

                    <div className="overflow-hidden relative mt-4 rounded-lg bg-gray-100 shadow-md">
                        <img
                            className="w-full max-h-[470px] rounded-xl object-cover"
                            src={blogs[0]?.image}
                            alt="Travel Pro"
                        />
                        <div className="absolute top-10 left-10 w-28 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {formatDate(blogs[0]?.createdAt)}
                        </div>
                        <div className="absolute top-20 left-10 w-28 text-white text-center border border-white rounded-full px-3 py-1 text-sm font-semibold">
                            {blogs[0]?.categories}
                        </div>
                        <div className="absolute top-20 right-10 bg-white bg-opacity-65 rounded-lg p-4">
                            <div className="text-sm font-semibold text-gray mb-1">
                                {blogs[0]?.categories}
                            </div>
                            <div className="w-80 text-2xl font-bold text-black">
                                {blogs[0]?.title}
                            </div>
                        </div>
                        <div className="rotate-[-45deg] absolute bottom-4 right-4 bg-white bg-opacity-70 rounded-full p-2 mr-2 mb-2">
                            <FaCircleArrowRight className="w-8 h-8" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-4 mt-16 ">
                    <div className="rounded-lg bg-white shadow-md">
                        <img
                            className="rounded-xl w-full h-full object-cover"
                            src={blogs[1]?.image}
                            alt="Image 1"
                        />

                        <p className="block p-4 mr-10 bg-white bg-opacity-65 rounded-lg font-bold absolute top-36 text-xl text-black ml-8">
                            {blogs[1]?.title}
                        </p>

                        <a className="absolute top-64 mt-20 right-20 text-base font-bold bg-light_gray pl-2 pr-2 rounded-full hover:bg-primary text-black">Xem thêm</a>

                    </div>
                    <div className="rounded-lg bg-white shadow-md">
                        <img
                            className="rounded-xl w-full h-full object-cover"
                            src={blogs[2]?.image}
                            alt="Image 2"
                        />

                        <p className="block p-4 mr-10 bg-white bg-opacity-65 rounded-lg font-bold absolute bottom-40 text-xl text-black ml-8">
                            {blogs[2]?.title}
                        </p>

                        <div className="flex items-center absolute bottom-16 bg-light_gray hover:bg-primary right-14 pl-2 pr-2 rounded-full cursor-pointer transition duration-300 ease-in-out">
                            <span className="flex items-center mr-2 font-medium text-base text-black transition duration-300 ease-in-out">
                                Xem tất cả bài viết
                                <FaLongArrowAltRight className="ml-2 text-2xl text-black transition duration-300 ease-in-out" />
                            </span>
                        </div>

                    </div>
                </div>
            </div>



            {blogs?.map((blog) => {
                return (
                    <div class="max-w-7xl  mx-auto ">
                        <div class="flex items-start p-4 border border-gray-200 bg-white shadow-lg rounded-lg mb-4">
                            <img class="w-60 h-48 object-cover rounded-lg mr-4" src={blog?.image} alt="Image 3" />
                            <div class="flex flex-col justify-between">
                                <div>
                                    <span class="text-sm text-gray-500">1 phút trước</span>
                                    <strong class="block text-lg font-semibold mt-1">{blog?.title}</strong>
                                </div>
                                <span class="text-blue-500 cursor-pointer hover:underline mt-2">Xem thêm</span>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    );
};
