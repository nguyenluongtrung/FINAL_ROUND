import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const account = JSON.parse(localStorage.getItem('account'));
console.log(account);

export const login = createAsyncThunk(
	'auth/login',
	async (account, thunkAPI) => {
		try {
			return await authService.login(account);
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

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const register = createAsyncThunk(
	'auth/register',
	async (accountData, thunkAPI) => {
		try {
			return await authService.register(accountData);
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

export const getAllAccounts = createAsyncThunk(
	'auth/getAllAccounts',
	async (_, thunkAPI) => {
		try {
			return await authService.getAllAccounts();
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

export const updateAccountInformation = createAsyncThunk(
	'auth/updateAccountInformation',
	async (account, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await authService.updateAccountInformation(account, token);
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

export const getAccountInformation = createAsyncThunk(
	'auth/getAccountInformation',
	async (_, thunkAPI) => {
		try {
			const storedAccount = JSON.parse(localStorage.getItem('account'));
			const token = storedAccount.data.token;
			return await authService.getAccountInformation(token);
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
	account: account || null,
	accounts: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
	accountId: null,
};

export const authSlice = createSlice({
	name: 'auth',
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
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.account = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.account = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.account = null;
			})
			.addCase(updateAccountInformation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateAccountInformation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.account = action.payload;
			})
			.addCase(updateAccountInformation.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.account = null;
			})
			.addCase(getAccountInformation.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAccountInformation.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.account = action.payload;
			})
			.addCase(getAccountInformation.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.account = null;
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getAllAccounts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllAccounts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.accounts = action.payload;
			})
			.addCase(getAllAccounts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
