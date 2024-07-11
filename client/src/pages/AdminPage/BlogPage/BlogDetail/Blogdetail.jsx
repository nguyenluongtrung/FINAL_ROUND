import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../../components';
import toast from 'react-hot-toast';
import { errorStyle, successStyle } from '../../../../utils/toast-customize';
import { AiOutlineClose } from 'react-icons/ai'; 
import { useEffect, useState } from 'react';
import { formatDate } from '../../../../utils/format';

export const BlogDetail = ({ chosenBlogId, setIsOpenDetailBlog, handleGetAllBlogs }) => {
	const { blogs, isLoading: BlogLoading } = useSelector((state) => state.blogs);
	const [chosenBlog, setChosenBlog] = useState(
		blogs[blogs.findIndex((Blog) => String(Blog._id) == String(chosenBlogId))]
	); 
	if (BlogLoading) {
		return <Spinner />;
	}

	return (
		<div className="popup active">
			<div className="overlay"></div>
			
			<form className="content rounded-md p-5" style={{ width: '35vw', height: '70vh', overflowY: 'auto' }}>
				<AiOutlineClose
					className="absolute text-sm hover:cursor-pointer"
					onClick={() => { setIsOpenDetailBlog(false); handleGetAllBlogs() }}
				/>
				<p className="grid text-green font-bold text-xl justify-center"> 
				</p>
				<table className="mt-3">
					<tbody>
					<tr>
						<td className="pl-6 py-1 w-82">
							<h1 className="text-center font-bold text-[30px]">{chosenBlog?.title}</h1>
								<p className="text-center" style={{ width: '100%' }}>
									{chosenBlog?.blogContent}
								</p>
							</td>
						</tr> 
					</tbody>
				</table>
			</form>
		</div>
	);
};
