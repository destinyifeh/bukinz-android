import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentRoute: null,
  previousRoute: null,
  appStatus: null,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getcurrentRoute: (state, action) => {
      state.currentRoute = action.payload;
    },
    getPreviousRoute: (state, action) => {
      state.previousRoute = action.payload;
    },
    getAppState: (state, action) => {
      console.log(action.payload, 'app state');
      state.appStatus = action.payload;
    },
  },
});

export const {getPreviousRoute, getcurrentRoute, getAppState} =
  globalSlice.actions;
export default globalSlice.reducer;
