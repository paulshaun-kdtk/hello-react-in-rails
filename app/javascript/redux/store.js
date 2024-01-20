import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/GreetingSlice.js'

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
