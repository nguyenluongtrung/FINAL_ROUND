import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import discussionService from './discussionService';

const account = JSON.parse(localStorage.getItem('account'));
console.log(account);

export const getAllDiscussions = createAsyncThunk(
	'auth/getAllDiscussions',
	async (_, thunkAPI) => {
		try {
			return await discussionService.getAllDiscussions();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);
export const getAllDiscussionsByPopular = createAsyncThunk(
	'auth/getAllDiscussionsByPopular',
	async (_, thunkAPI) => {
		try {
			return await discussionService.getAllDiscussionsByPopular();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getDiscussion = createAsyncThunk(
	'auth/getDiscussion',
	async (discussionId, thunkAPI) => {
		try {
			return await discussionService.getDiscussion(discussionId);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createComment = createAsyncThunk(
	'auth/createComment',
	async ({ content, accountId, discussionId }, thunkAPI) => {
		try {
			console.log({ content, accountId, discussionId });
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.createComment(
				content,
				accountId,
				discussionId,
				token
			);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getAllComments = createAsyncThunk(
	'auth/getAllComments',
	async (discussionId, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.getAllComments(discussionId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getAllDiscussionsByTopic = createAsyncThunk(
	'auth/getAllDiscussionsByTopic',
	async (topic, thunkAPI) => {
		try {
			return await discussionService.getAllDiscussionsByTopic(topic);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const createDiscussion = createAsyncThunk(
	'auth/createDiscussion',
	async (discussionData, thunkAPI) => {
		try {
			// const storedAccount = JSON.parse(localStorage.getItem('account'));
			// const token = storedAccount.data.token;
			return await discussionService.createDiscussion(discussionData);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const deleteDiscussion = createAsyncThunk(
	'auth/deleteDiscussion',
	async (discussionId, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.deleteDiscussion(discussionId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);
export const updateDiscussion = createAsyncThunk(
	'auth/updateDiscussion',
	async ({ discussionId, discussionData }, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.updateDiscussion(
				discussionId,
				discussionData,
				token
			);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const reactHeart = createAsyncThunk(
	'auth/reactHeart',
	async ({ discussionId, accountId }, thunkAPI) => {
		try {
			return await discussionService.reactHeart(discussionId, accountId);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

const initialState = {
	discussions: [],
	discussion: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const authSlice = createSlice({
	name: 'discussions',
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isLoading = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllDiscussions.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllDiscussions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions = action.payload;
			})
			.addCase(getAllDiscussions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.discussions = [];
			})
			.addCase(getAllComments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllComments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(getAllComments.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getAllDiscussionsByPopular.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllDiscussionsByPopular.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions = action.payload;
			})
			.addCase(getAllDiscussionsByPopular.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.discussions = [];
			})
			.addCase(getDiscussion.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getDiscussion.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussion = action.payload;
			})
			.addCase(getDiscussion.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.discussions = [];
			})
			.addCase(getAllDiscussionsByTopic.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllDiscussionsByTopic.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions = action.payload;
			})
			.addCase(getAllDiscussionsByTopic.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.discussions = [];
			})
			.addCase(createDiscussion.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createDiscussion.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions.push(action.payload);
			})
			.addCase(createDiscussion.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(createComment.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createComment.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				// state.discussions.push(action.payload);
			})
			.addCase(createComment.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteDiscussion.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteDiscussion.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions = state.discussions.filter(
					(discussion) => String(discussion._id) !== String(action.payload._id)
				);
			})
			.addCase(deleteDiscussion.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(updateDiscussion.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateDiscussion.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions[
					state.discussions.findIndex(
						(discussion) => discussion._id == action.payload._id
					)
				] = action.payload;
			})
			.addCase(updateDiscussion.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(reactHeart.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(reactHeart.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.discussions[
					state.discussions.findIndex(
						(discussion) => discussion._id == action.payload._id
					)
				] = action.payload;
			})
			.addCase(reactHeart.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
