import { useDispatch } from 'react-redux';
import { formatDate } from '../../../utils/format';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
	createComment,
	getAllComments,
	reactHeart,
} from '../../../features/discussions/discussionSlice';
import { useEffect, useState } from 'react';
import { getAccountInformation } from '../../../features/auth/authSlice';
import toast from 'react-hot-toast';
import { errorStyle, successStyle } from '../../../utils/toast-customize';

export const DiscussionDetail = ({ chosenDiscussion, setChosenDiscussion }) => {
	const [content, setContent] = useState('');
	const [account, setAccount] = useState('');
	const [comments, setComments] = useState();
	const dispatch = useDispatch();

	const handleReactHeart = async (discussionId) => {
		const response = await dispatch(
			reactHeart({ discussionId, accountId: account._id })
		);
		setChosenDiscussion(response.payload);
	};

	const handleCreateComment = async () => {
		const result = await dispatch(
			createComment({
				content,
				accountId: account._id,
				discussionId: chosenDiscussion._id,
			})
		);
		if (result.type.endsWith('fulfilled')) {
			toast.success('Bình luận thành công', successStyle);
			setComments((state) => state = result.payload)
			console.log(comments)
		} else if (result?.error?.message === 'Rejected') {
			toast.error(result?.payload, errorStyle);
		}
	};

	const fetchMyAccount = async () => {
		const response = await dispatch(getAccountInformation());
		setAccount(response.payload);
	};

	const fetchAllComments = async () => {
		const response = chosenDiscussion.comments;
		setComments(response);
	};

	useEffect(() => {
		fetchMyAccount();
	}, []);

	useEffect(() => {
		fetchAllComments();
	}, []);

	return (
		<>
			<div className="p-8 relative bg-white rounded-md">
				{chosenDiscussion?.loveAccounts?.includes(
					'668e941547a6ebfd7ca1f4cf'
				) ? (
					<FaHeart
						className="absolute right-8 hover:cursor-pointer"
						size={16}
						color="red"
						onClick={() => handleReactHeart(chosenDiscussion._id)}
					/>
				) : (
					<FaRegHeart
						className="absolute right-8 hover:cursor-pointer"
						size={16}
						onClick={() => handleReactHeart(chosenDiscussion._id)}
					/>
				)}

				<p className="font-semibold text-xl mb-1">{chosenDiscussion.title}</p>
				<p className="mb-5 text-gray italic text-xs">
					Ngày đăng: {formatDate(chosenDiscussion.createdAt)}
				</p>
				<p className="text-justify mb-5">{chosenDiscussion.description}</p>
				<img src={chosenDiscussion?.image} className="w-full h-80 mb-5" />
			</div>
			<form className="px-8 py-10 relative bg-white rounded-md mt-10">
				<div className="flex gap-3">
					<input
						type="text"
						className="rounded-md px-3 py-2 custom-input w-5/6 focus:outline-primary"
						placeholder='Nhập bình luận của bạn vào đây'
						onChange={(e) => setContent(e.target.value)}
					/>
					<button
						className="bg-primary text-white rounded-xl px-5 py-2 w-1/6"
						onClick={handleCreateComment}
					>
						Bình luận
					</button>
				</div>
				{comments?.map((comment) => {
					return <div className='flex gap-4 mt-5'>
						<div>
							<img src={comment.accountId.avatar} className='rounded-full w-10'/>
						</div>
						<div>
							<p className='font-semibold'>{comment.accountId.name}</p>
							<p>{comment.content}</p>
						</div>
					</div>;
				})}
			</form>
		</>
	);
};
