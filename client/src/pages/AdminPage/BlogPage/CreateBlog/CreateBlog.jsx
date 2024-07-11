import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createBlog } from '../../../../features/blogs/blogSlice';
import toast from 'react-hot-toast';
import './CreateBlog.css';
import { errorStyle, successStyle } from '../../../../utils/toast-customize';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../../../firebase';

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
        const trimmedData = {
            ...data,
        };
        try {
            const blogData = blogUrl !== '' ? { ...trimmedData, image: blogUrl } : { ...trimmedData, image: 'https://static8.depositphotos.com/1010338/959/i/450/depositphotos_9597931-stock-photo-team-gear-3d-isolated-characters.jpg' };
            const result = await dispatch(createBlog(blogData));
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

    const fileRef = useRef(null);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState('');
    const [blogUrl, setBlogUrl] = useState('');

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        if (file.size > 2 * 1024 * 1024) {
            setFileUploadError('Dung lượng ảnh phải nhỏ hơn 2MB');
            setFilePerc(0);
            return;
        }

        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, `blog/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
                setFileUploadError(''); // Reset error state on new upload
            },
            (error) => {
                setFileUploadError('Tải ảnh lên thất bại');
                setFilePerc(0); // Reset progress on error
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setBlogUrl(downloadURL);
                    setFilePerc(100); // Set progress to 100 on successful upload
                    setFileUploadError(''); // Reset error state on successful upload
                });
            }
        );
    };

    return (
        <div className="popup active fixed inset-0 flex items-center justify-center z-50">
        <div className="overlay fixed inset-0 bg-black opacity-50"></div>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-white rounded-md shadow-lg p-6 w-11/12 max-w-xl mx-auto overflow-y-auto"
            style={{ maxHeight: '90vh' }}
        >
            <AiOutlineClose
                className="absolute text-lg hover:cursor-pointer text-gray-500 hover:text-gray-700"
                style={{ top: '10px', right: '10px' }}
                onClick={() => setIsOpenCreateBlog(false)}
            />
            <p className="text-center text-green font-bold text-2xl">
                TẠO BLOG MỚI
            </p>
            <div className="form-group space-y-2">
                <label className='font-bold'>Tiêu đề <span className="text-red-500"> * </span></label>
                <input
                    type="text"
                    {...register('title', { required: 'Tiêu đề là bắt buộc' })}
                    className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                    placeholder="Nhập tên của bài viết"
                    required
                />
            </div>
            <div className="form-group space-y-2">
                <label className='font-bold'>Tên tác giả <span className="text-red-500"> * </span></label>
                <input
                    type="text"
                    {...register('blogerName', { required: 'Tên tác giả là bắt buộc' })}
                    className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                    placeholder="Nhập tên của tác giả"
                    required
                />
            </div>
            <div className="form-group space-y-2">
                <label className="font-bold">Nội Dung <span className="text-red-500"> * </span></label>
                <textarea
                    {...register('blogContent', { required: 'Nội dung là bắt buộc' })}
                    className="create-question-input w-full h-[300px] border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                    required
                />
            </div>
            <div className="form-group space-y-2">
                <label className="font-bold">Tham chiếu</label>
                <input
                    type="text"
                    {...register('reference')}
                    className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="form-group space-y-2">
                <label className="font-bold">Ảnh</label>
                <img
                    src={blogUrl || 'https://static8.depositphotos.com/1010338/959/i/450/depositphotos_9597931-stock-photo-team-gear-3d-isolated-characters.jpg'}
                    className="border rounded-lg mx-auto mb-2 w-28 h-28"
                />
                <span
                    className="block rounded-md bg-blue text-white p-2 mx-auto w-fit text-center hover:cursor-pointer hover:bg-blue-700"
                    onClick={(e) => {
                        e.preventDefault();
                        fileRef.current.click();
                    }}
                >
                    <span className='py-1 px-3 rounded-lg'>Chọn ảnh blog</span>
                </span>
                <input
                    type="file"
                    ref={fileRef}
                    hidden
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                        setFileUploadError(''); // Reset error state on file change
                    }}
                />
                <p className="text-sm text-center">
                    {fileUploadError ? (
                        <span className="text-red">
                            {fileUploadError}
                        </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                        <span className="text-gray">{`Đang tải lên ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                        <span className="text-green">Tải ảnh lên thành công!</span>
                    ) : (
                        ''
                    )}
                </p>
            </div>
            <div className="form-group space-y-2">
                <label className="font-bold">Thể loại</label>
                <select
                    id="categories"
                    {...register('categories', { required: 'Phân loại là bắt buộc' })}
                    className="create-question-input w-full border border-gray rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
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
                    className="bg-primary text-white text-center rounded-md px-4 py-2 font-medium hover:bg-blue-700"
                >
                    Tạo blog mới
                </button>
            </div>
        </form>
    </div>
    
    );
};
