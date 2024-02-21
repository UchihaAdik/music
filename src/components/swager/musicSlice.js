import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name:'musik',
    initialState: {
        selectedItem: [],
        selecteQueue: [],
      },
    reducers: {
        updateSelectedItem: (state,action) => {
        state.selectedItem.push(action.payload)
    },
        removeSelectedItem: (state, action) => {
        state.selectedItem = state.selectedItem.filter(
          (item) => item !== action.payload
        );
      },
        updateselecteQueue:(state,action)=>{
        state.selecteQueue.push(action.payload)
    },
    },
})

export const {updateSelectedItem,updateselecteQueue,removeSelectedItem} = musicSlice.actions;
export default musicSlice.reducer;

