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

export const createTopic = createAsyncThunk(
	'auth/createTopic',
	async (discussionData, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.updateTopic(account, token);
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

export const deleteTopic = createAsyncThunk(
	'auth/deleteTopic',
	async (discussionData, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await discussionService.updateTopic(account, token);
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
		builder;
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
