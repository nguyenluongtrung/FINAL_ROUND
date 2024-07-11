import { useState } from 'react';
import { MdEdit } from 'react-icons/md';

export const DiscussionDetail = ({ chosenDiscussion }) => {
	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<>
			<form>
				<div className="px-8 py-10 relative bg-white rounded-md">
					<MdEdit
						className="text-gray absolute right-5 top-3"
						size={20}
						onClick={() => setIsEditMode(true)}
					/>
					{isEditMode ? (
						<input
							type="text"
							className="w-full py-2 rounded-md focus:outline-primary custom-input mb-5 pl-3"
							placeholder="Tiêu đề"
							defaultValue={chosenDiscussion.title}
							// {...register('title')}
						/>
					) : (
						<input
							type="text"
							className="w-full py-2 rounded-md focus:outline-primary custom-input mb-5 pl-3"
							placeholder="Tiêu đề"
							defaultValue={chosenDiscussion.title}
							// {...register('title')}
						/>
					)}

					<textarea
						className="w-full py-2 rounded-md focus:outline-primary custom-input mb-5 pl-3"
						rows={5}
						placeholder="Nội dung"
						defaultValue={chosenDiscussion.description}
						// {...register('description')}
					></textarea>
                    <img src={chosenDiscussion?.image} className='w-full h-80 mb-5'/>
					<button
						type="submit"
						className="bg-primary text-white rounded-xl px-5 py-2 w-full"
					>
						Chỉnh sửa thảo luận
					</button>
				</div>
			</form>
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
