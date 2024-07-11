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

const initialState = {
	discussions: [],
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
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
