import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import topicService from './topicService';

const account = JSON.parse(localStorage.getItem('account'));
console.log(account);

export const getAllTopics = createAsyncThunk(
	'auth/getAllTopics',
	async (_, thunkAPI) => {
		try {
			return await topicService.getAllTopics();
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
	async (topicData, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await topicService.updateTopic(account, token);
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
	async (topicData, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await topicService.updateTopic(account, token);
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
	topics: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const authSlice = createSlice({
	name: 'topics',
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
