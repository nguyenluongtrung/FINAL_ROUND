import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogService from './blogService';

const getToken = () => {
    const storedAccount = JSON.parse(localStorage.getItem('account'));
    return storedAccount ? storedAccount.data.token : null;
};

const handleAsyncError = (error, thunkAPI) => {
    const message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();
    return thunkAPI.rejectWithValue(message);
};

export const getAllBlogs = createAsyncThunk(
    'blogs/getAllBlogs',
    async (_, thunkAPI) => {
        try {
            const token = getToken();
            return await blogService.getAllBlogs(token);
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);

export const createBlog = createAsyncThunk(
    'blogs/createBlog',
    async (blogData, thunkAPI) => {
        try {
            
            return await blogService.createBlog(blogData);
           
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
        
    }
    
);

export const updateBlog = createAsyncThunk(
    'blogs/updateBlog',
    async ({ blogData, id }, thunkAPI) => {
        try {
            return await blogService.updateBlog( blogData, id);
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);

export const deleteBlog = createAsyncThunk(
    'blogs/deleteBlog',
    async (id, thunkAPI) => {
        try {
            const token = getToken();
            return await blogService.deleteBlog(id, token);
        } catch (error) {
            return handleAsyncError(error, thunkAPI);
        }
    }
);

const initialState = {
    blogs: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    selectedBlogs: [],
};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = '';
            state.selectedBlogs = [];
        },
        selectBlog: (state, action) => {
            state.selectedBlogs.push(action.payload);
        },
        deselectBlog: (state, action) => {
            state.selectedBlogs = state.selectedBlogs.filter(
                (blog) => blog._id !== action.payload._id
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.blogs = [];
            })
            .addCase(createBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs.push(action.payload);
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = state.blogs.filter(
                    (blog) => String(blog._id) !== String(action.payload._id)
                );
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updateBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs[
					state.blogs.findIndex(
						(blog) => blog._id == action.payload._id
					)
				] = action.payload;
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset, selectBlog, deselectBlog } = blogSlice.actions;
export default blogSlice.reducer;
