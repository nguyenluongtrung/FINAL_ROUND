import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../../components';
import toast from 'react-hot-toast';
import './UpdateBlog.css';
import { errorStyle, successStyle } from '../../../../utils/toast-customize';
import { AiOutlineClose } from 'react-icons/ai'; 
import { updateBlog } from '../../../../features/blogs/blogSlice';
import { useEffect, useState } from 'react';

export const UpdateBlog = ({ setIsOpenUpdateBlog, chosenBlogId, handleGetAllBlogs }) => {
    const { blogs, isLoading: blogLoading } = useSelector((state) => state.blogs);
    const [chosenBlog, setChosenBlog] = useState(
        blogs.find((blog) => blog._id == chosenBlogId)
    );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
 
    const onSubmit = async (data) => {
        console.log(data)
        const blogData = {
            ...data,
        };
        const result = await dispatch(updateBlog({ blogData, id: chosenBlogId }));
        if (result.type.endsWith('fulfilled')) {
            toast.success('Cập nhật blog thành công', successStyle);
        } else if (result?.error?.message === 'Rejected') {
            toast.error(result?.payload, errorStyle);
        }
        setIsOpenUpdateBlog(false);
        handleGetAllBlogs();
    };

    if (blogLoading) {
        return <Spinner />;
    }

    return (
        <div className="popup active">
            <div className="overlay"></div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="content rounded-md p-5"
                style={{ width: '90%', maxWidth: '600px' }}
            >
                <AiOutlineClose
                    className="absolute text-sm hover:cursor-pointer"
                    style={{ top: '10px', right: '10px' }}
                    onClick={() => setIsOpenUpdateBlog(false)}
                />
                <p className="grid text-green font-bold text-xl justify-center">
                    CẬP NHẬT BLOG
                </p>
                <div className="form-group">
                    <label className='font-bold'>Tiêu đề</label>
                    <input
                        {...register('title')}
                        className="create-question-input text-center text-sm"
                        defaultValue={chosenBlog?.title}
                    />
                </div>
                <div className="form-group">
                    <label className='font-bold'>Tên tác giả</label>
                    <input
                        {...register('blogerName')}
                        className="create-question-input text-center text-sm"
                        defaultValue={chosenBlog?.blogerName}
                    />
                </div>
                <div className="form-group">
                    <label className="font-bold">Tham chiếu</label>
                    <input
                        type="text"
                        {...register('Reference')}
                        className="create-question-input text-center text-sm"
                        defaultValue={chosenBlog?.Reference}
                    />
                </div>
                <div className="form-group">
                    <label className="font-bold">Thể loại</label>
                    <select
                        id="categories"
                        defaultValue={chosenBlog?.categories}
                        {...register('categories')}
                        className="create-question-input text-center text-sm"
                    >
                        <option value="">Select a category</option>
                        <option value="FPT">FPT</option>
                        <option value="Bán dẫn">Bán dẫn</option>
                        <option value="Trí tuệ nhân tạo (AI)">Trí tuệ nhân tạo (AI)</option>
                        <option value="Chuyển đổi số">Chuyển đổi số</option>
                        <option value="Môi trường xanh">Môi trường xanh</option>
                        <option value="Xe điện">Xe điện</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="font-bold">Nội dung</label>
                    <textarea
                        {...register('blogContent')}
                        className="create-question-input text-center text-sm"
                        defaultValue={chosenBlog?.blogContent}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="block bg-primary text-white text-center rounded-md p-2 font-medium mb-1 mt-3 hover:bg-primary_dark"
                    >
                        Cập nhật blog
                    </button>
                </div>
            </form>
        </div>
    );
};
