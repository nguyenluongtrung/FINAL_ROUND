import { useDispatch } from 'react-redux';
import { formatDate } from '../../../utils/format';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
	reactHeart,
} from '../../../features/discussions/discussionSlice';

export const DiscussionDetail = ({ chosenDiscussion, setChosenDiscussion }) => {
	const dispatch = useDispatch();

	const handleReactHeart = async (discussionId) => {
		const response = await dispatch(
			reactHeart({ discussionId, accountId: '668e941547a6ebfd7ca1f4cf' })
		);
		setChosenDiscussion(response.payload);
	};

	return (
		<>
			<div className="p-8 relative bg-white rounded-md">
				{chosenDiscussion?.loveAccounts?.includes('668e941547a6ebfd7ca1f4cf') ? (
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
					/>
					<button className="bg-primary text-white rounded-xl px-5 py-2 w-1/6">
						Bình luận
					</button>
				</div>
			</form>
		</>
	);
};
