import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from '../WatchListSlice/WatchListSlice';



export const store = configureStore({
  reducer: {

    watchList: watchListReducer,
    watched: watchListReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;