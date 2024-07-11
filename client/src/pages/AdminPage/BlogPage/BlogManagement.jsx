import { useEffect, useState } from 'react';
import { CreateBlog } from './CreateBlog/CreateBlog';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../components'; 
import { deleteBlog, getAllBlogs } from '../../../features/blogs/blogSlice';
import { errorStyle, successStyle } from '../../../utils/toast-customize';
import { formatDate } from '../../../utils/format';
import { BlogDetail } from './BlogDetail/Blogdetail';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { UpdateBlog } from './UpdateBlog/UpdateBlog';
import { BiEdit, BiTrash } from 'react-icons/bi';
import toast, { Toaster, ToastBar } from 'react-hot-toast';

export const BlogManagement = () => {
    const [isOpenCreateBlog, setIsOpenCreateBlog] = useState(false);
    const [isOpenDetailBlog, setIsOpenDetailBlog] = useState(false);
    const [isOpenUpdateBlog, setIsOpenUpdateBlog] = useState(false);
    const { blogs, isLoading } = useSelector((state) => state.blogs);
    const [chosenBlogId, setChosenBlogId] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    const handleGetAllBlogs = () => {
        Promise.all([dispatch(getAllBlogs())]).catch((error) => {
            console.error('Error during dispatch:', error);
        });
    };

    const handleDeleteBlog = async (id) => {
        const result = await dispatch(deleteBlog(id));
        if (result.type.endsWith('fulfilled')) {
            toast.success('Xoá blog thành công', successStyle);
        } else if (result?.error?.message === 'Rejected') {
            toast.error(result?.payload, errorStyle);
        }
    };
    {isOpenDetailBlog && (
        <BlogDetail
            setIsOpenDetailBlog={setIsOpenDetailBlog}
            handleGetAllBlogs={handleGetAllBlogs}
            chosenBlogId={chosenBlogId}
        />
    )}
    const handleOpenCreateBlog = () => {
        setIsOpenCreateBlog(true);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="w-full min-h-screen bg-white flex flex-row mt-16">
            <div className="flex-1 px-10 pt-5">
                <Toaster>
                    {(t) => (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                animation: t.visible
                                    ? 'custom-enter 1s ease'
                                    : 'custom-exit 1s ease',
                            }}
                        />
                    )}
                </Toaster>
                {isOpenCreateBlog && (
                    <CreateBlog
                        setIsOpenCreateBlog={setIsOpenCreateBlog}
                        handleGetAllBlogs={handleGetAllBlogs}
                    />
                )}
                {isOpenUpdateBlog && (
                    <UpdateBlog
                        setIsOpenUpdateBlog={setIsOpenUpdateBlog}
                        handleGetAllBlogs={handleGetAllBlogs}
                        chosenBlogId={chosenBlogId}
                    />
                )}
                {isOpenDetailBlog && (
                    <BlogDetail
                        setIsOpenDetailBlog={setIsOpenDetailBlog}
                        handleGetAllBlogs={handleGetAllBlogs}
                        chosenBlogId={chosenBlogId}
                    />
                )}
                <div className="flex">
                    <div className="flex-1 pt-2">
                        <span>Hiển thị </span>
                        <select
                            className="rounded-md p-1 mx-1 hover:cursor-pointer"
                            style={{ backgroundColor: '#E0E0E0' }}
                        >
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                        <span> hàng</span>
                    </div>
                    <button
                        className="bg-pink text-white py-2 rounded-md block mx-auto"
                        style={{ width: '120px' }}
                        onClick={handleOpenCreateBlog}
                    >
                        <span>Thêm blog mới</span>
                    </button>
                </div>
                <table className="w-full border-b border-gray mt-3">
                    <thead>
                        <tr className="text-sm font-medium text-gray-700 border-b border-gray border-opacity-50">
                            <td className="py-2 px-1 text-center font-bold">Tiêu đề</td>
                            <td className="py-2 px-1 text-center font-bold">Ảnh blog</td>
                            <td className="py-2 px-1 text-center font-bold">Tên tác giả</td>
                            <td className="py-2 px-1 text-center font-bold">Loại</td>
                            <td className="py-2 px-1 text-center font-bold">Nội Dung</td>
                            <td className="py-2 px-1 text-center font-bold">Ngày đăng</td> 
                            <td className="py-2 px-1 text-center font-bold">Hành động</td>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs?.map((blog) => (
                            <tr className="hover:bg-light_purple transition-colors group odd:bg-light_purple hover:cursor-pointer">
                                <td className="font-medium text-center text-gray p-3">
                                    <span>{blog?.title}</span>
                                     
                                </td>
                                <td className="font-medium text-center text-gray">
                                    <span>{blog?.blogerName}</span>
                                </td>
                                <td className="font-medium text-center text-gray">
                                    <span>{blog?.blogerName}</span>
                                </td>
                                <td className="font-medium text-center text-gray">
                                    <span>{blog?.categories}</span>
                                </td>
                                <td className="font-medium text-center text-gray">
                                        <button
                                            className="hover:cursor-pointer text-xl pt-1.5"
                                            onClick={() => {
                                                setIsOpenDetailBlog(true);
                                                setChosenBlogId(blog._id);
                                            }}>
                                            <MdOutlineRemoveRedEye className="block mx-auto" />
                                        </button>
                                    </td>
                                <td className="font-medium text-center text-gray">
                                    <span>{formatDate(blog?.createdAt)}</span>
                                </td>
                                
                                <td className="">
                                    <div className="flex items-center justify-center">
                                    <button
                                                className="flex items-center justify-end py-3 pr-2 text-xl"
                                                onClick={() => {
                                                    setIsOpenUpdateBlog(true);
                                                    setChosenBlogId(blog._id);
                                                }}
                                            >
                                            <BiEdit className="text-green" />
                                        </button>
                                        <button className="flex items-center justify-start py-3 pl-2 text-xl">
                                            <BiTrash
                                                className="text-red"
                                                onClick={() => handleDeleteBlog(blog._id)}
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
