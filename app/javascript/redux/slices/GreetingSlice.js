import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to fetch greetings data
export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('/api/greetings/index');
  const data = await response.json();
  return data;
});

// Create the greetings slice
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetingsData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetingsData = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default greetingsSlice.reducer;
