import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../../features/blogs/blogSlice';
import toast from 'react-hot-toast';
import './CreateBlog.css';
import { errorStyle, successStyle } from '../../../../utils/toast-customize';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const CreateBlog = ({ setIsOpenCreateBlog, handleGetAllBlogs }) => {
    const [formData, setFormData] = useState({
        title: '',
        blogerName: '',
        blogContent: '',
        reference: '',
        categories: '',
        image: null,
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (data) => {
        const BlogData = {
            ...data,
        };
        try {
            const result = await dispatch(createBlog(BlogData));
            if (result.type.endsWith('fulfilled')) {
                toast.success('Thêm blog thành công', successStyle);
            } else if (result?.error?.message === 'Rejected') {
                toast.error(result?.payload, errorStyle);
            }
            setIsOpenCreateBlog(false);
            handleGetAllBlogs();
        } catch (error) {
            console.error('Error creating blog:', error);
            toast.error(`Error: ${error.message}`, errorStyle);
        }
    };

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
                    onClick={() => setIsOpenCreateBlog(false)}
                />
                <p className="grid text-green font-bold text-xl justify-center">
                    TẠO BLOG MỚI
                </p>
                <div className="form-group">
                    <label className='font-bold'>Tiêu đề <span className="text-red"> * </span></label>
                    <input
                        type="text"
                        {...register('title', { required: 'Tiêu đề là bắt buộc' })}
                        className="create-question-input text-center text-sm"
                        placeholder="Nhập tên của bài viết"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='font-bold'>Tên tác giả <span className="text-red"> * </span></label>
                    <input
                        type="text"
                        {...register('blogerName', { required: 'Tên tác giả là bắt buộc' })}
                        className="create-question-input text-center text-sm"
                        placeholder="Nhập tên của tác giả"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="font-bold">Nội Dung <span className="text-red"> * </span></label>
                    <textarea
                        {...register('blogContent', { required: 'Nội dung là bắt buộc' })}
                        className="create-question-input text-center text-sm"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="font-bold">Tham chiếu</label>
                    <input
                        type="text"
                        {...register('reference')}
                        className="create-question-input text-center text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="font-bold">Thể loại</label>
                    <select
                        id="categories"
                        {...register('categories', { required: 'Phân loại là bắt buộc' })}
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
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="block bg-primary text-white text-center rounded-md p-2 font-medium mb-1 mt-3"
                    >
                        Tạo blog mới
                    </button>
                </div>
            </form>
        </div>
    );
};
