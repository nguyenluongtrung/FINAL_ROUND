import { useForm } from 'react-hook-form';
import './CreateDiscussion.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { createDiscussion } from '../../../features/discussions/discussionSlice';
import { useEffect, useRef, useState } from 'react';
import { app } from '../../../firebase';
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
import { MdOutlineCloudUpload } from "react-icons/md";
import { errorStyle, successStyle } from '../../../utils/toast-customize';
import toast from 'react-hot-toast';

export const CreateDiscussion = ({fetchAllDiscussions}) => {
	const fileRef = useRef(null);
	const [file, setFile] = useState(undefined);
	const [filePerc, setFilePerc] = useState(0);
	const [fileUploadError, setFileUploadError] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	const dispatch = useDispatch();
	const options = [
		{ value: 'FPT', label: 'FPT' },
		{ value: 'AI', label: 'AI' },
		{ value: 'Bán dẫn', label: 'Bán dẫn' },
	];
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleChangeTopics = (options) => {
		setSelectedOptions(options);
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (file) {
			setFileUploadError(false);
			handleFileUpload(file);
		}
	}, [file]);

	const handleFileUpload = (file) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, `discussions/${fileName}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setFilePerc(Math.round(progress));
			},
			(error) => {
				setFileUploadError(true);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
					setImageUrl(downloadURL)
				);
			}
		);
	};

	const onSubmit = async (data) => {
		let topics = [];
		selectedOptions.forEach((option) => topics.push(option.value));
		console.log(imageUrl)
		const result = await dispatch(createDiscussion({ ...data, topics, image: imageUrl }));
        if (result.type.endsWith('fulfilled')) {
			toast.success('Tạo bài thảo luận thành công', successStyle);
		} else if (result?.error?.message === 'Rejected') {
			toast.error(result?.payload, errorStyle);
		}
		fetchAllDiscussions()
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-5 bg-white rounded-md">
				<input
					type="text"
					className="w-full py-2 rounded-md focus:outline-primary custom-input mb-5 pl-3"
					placeholder="Tiêu đề"
					{...register('title')}
				/>
				<textarea
					className="w-full py-2 rounded-md focus:outline-primary custom-input mb-5 pl-3"
					rows={5}
					placeholder="Nội dung"
					{...register('description')}
				></textarea>
				<Select
					isMulti
					name="topics"
					options={options}
					className="basic-multi-select mb-5 focus:!outline-primary"
					classNamePrefix="select"
					onChange={handleChangeTopics}
					placeholder="Chọn chủ đề"
				/>
				<div className='flex gap-5 items-center'>
				<button
					className={`rounded-md rounded-customized-gray p-1 bg-primary border-0 text-white hover:cursor-pointer mb-3`}
					onClick={(e) => {e.preventDefault(); fileRef.current.click()}}
				>
					<div className='flex gap-3 items-center p-1.5'><MdOutlineCloudUpload size={20}/><p>Chọn ảnh</p></div>
				</button>
				<input
					type="file"
					ref={fileRef}
					hidden
					onChange={(e) => setFile(e.target.files[0])}
				/>
                <img src={imageUrl} className='w-20 mb-5'/>
				</div>
				
				<button
					type="submit"
					className="bg-primary text-white rounded-xl px-5 py-2 w-full"
				>
					Tạo thảo luận
				</button>
			</div>
		</form>
	);
};
