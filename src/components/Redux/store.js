import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer  from '../Thembtn/themeSlice';
import musicSliceReduser from '../swager/musicSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    themeBackground: themeReducer,
    musicSlice:musicSliceReduser,
    
  },
});

export default store;