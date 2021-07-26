import { configureStore } from "@reduxjs/toolkit";
// import RootReducers fro[[[[[[[[[ m "../features";
import RootReducers from "../features/rootReducer";

const store = configureStore({
  reducer: RootReducers,
});
export default store;
