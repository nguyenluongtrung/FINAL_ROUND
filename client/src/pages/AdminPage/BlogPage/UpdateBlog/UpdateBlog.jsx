import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../../components';
import toast from 'react-hot-toast';
import './UpdateBlog.css';
import { errorStyle, successStyle } from '../../../../utils/toast-customize';
import { AiOutlineClose } from 'react-icons/ai'; 
import { updateBlog } from '../../../../features/blogs/blogSlice';
import { useEffect, useRef, useState } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../../../firebase';
export const UpdateBlog = ({ setIsOpenUpdateBlog, chosenBlogId, handleGetAllBlogs }) => {
    const { blogs, isLoading: blogLoading } = useSelector((state) => state.blogs);
    const [chosenBlog, setChosenBlog] = useState(
        blogs.find((blog) => blog._id == chosenBlogId)
    );

    const fileRef = useRef(null);
	const [file, setFile] = useState(undefined);
	const [filePerc, setFilePerc] = useState(0);
	const [fileUploadError, setFileUploadError] = useState(false);
	const [blogUrl, setBlogUrl] = useState(''); 

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
		if (file) {
			handleFileUpload(file);
		}
	}, [file]);

    const handleFileUpload = (file) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, `vouchers/${fileName}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setFilePerc(Math.round(progress));
			},
			(error) => {
				setFileUploadError(true);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
					setBlogUrl(downloadURL)
				);
			}
		);
	};
    const onSubmit = async (data) => {
        console.log(data)
        const trimmedData = {
            ...data,
        };
        const blogData = blogUrl !== '' ? { ...trimmedData, image: blogUrl } : { ...trimmedData };
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
        <div className="popup active fixed inset-0 flex items-center justify-center z-50">
    <div className="overlay fixed inset-0 bg-black opacity-50"></div>
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white rounded-md shadow-lg p-6 w-full max-w-lg mx-auto space-y-6 overflow-y-auto max-h-[90vh]"
    >
        <AiOutlineClose
            className="absolute text-lg hover:cursor-pointer text-gray-500 hover:text-gray-700"
            style={{ top: '10px', right: '10px' }}
            onClick={() => setIsOpenUpdateBlog(false)}
        />
        <p className="text-center text-green-500 font-bold text-2xl">
            CẬP NHẬT BLOG
        </p>
        <div className="form-group space-y-2">
            <label className='font-bold'>Tiêu đề</label>
            <input
                {...register('title')}
                className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                defaultValue={chosenBlog?.title}
            />
        </div>
        <div className="form-group space-y-2">
            <label className='font-bold'>Tên tác giả</label>
            <input
                {...register('blogerName')}
                className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                defaultValue={chosenBlog?.blogerName}
            />
        </div>
        <div className="form-group space-y-2">
            <label className="font-bold">Tham chiếu</label>
            <input
                type="text"
                {...register('Reference')}
                className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
                defaultValue={chosenBlog?.Reference}
            />
        </div>
        <div className="form-group space-y-2">
            <label className="font-bold">Thể loại</label>
            <select
                id="categories"
                defaultValue={chosenBlog?.categories}
                {...register('categories')}
                className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 text-center text-sm focus:ring focus:ring-blue-300"
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
            <label className="font-bold">Nội dung</label>
            <textarea
                {...register('blogContent')}
                className="create-question-input w-full border border-gray-300 rounded-md px-3 py-2 h-72 text-center text-sm focus:ring focus:ring-blue-300"
                defaultValue={chosenBlog?.blogContent}
            />
        </div>
        <div className="flex justify-center">
            <button
                type="submit"
                className="bg-blue text-white text-center rounded-md px-4 py-2 font-medium hover:bg-blue-700"
            >
                Cập nhật blog
            </button>
        </div>
    </form>
</div>

    );
};
