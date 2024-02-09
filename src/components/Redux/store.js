import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer  from '../Thembtn/themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    themeBackground: themeReducer,
  },
});

export default store;