import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../__generated__/graphql";

export interface watchListType {
  watchList: Episode[];
  watching: Episode[];
  watched: Episode[];
}

const initialState: watchListType = {
  watchList: [],
  watching: [],
  watched: [],
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<Episode>) => {
      const existInWatchList = state.watchList.find(
        (movie) => movie.id === action.payload.id
      );
      if (existInWatchList) {
        return;
      }
      state.watchList.push(action.payload);
    },
    addToWatchedList: (state, action: PayloadAction<Episode>) => {
      const existInWatchList = state.watched.find(
        (movie) => movie.id === action.payload.id
      );
      if (existInWatchList) {
        return;
      }
      state.watched.push(action.payload);
    },
  },
});


export const { addToWatchList, addToWatchedList} = watchListSlice.actions
  
export default watchListSlice.reducer