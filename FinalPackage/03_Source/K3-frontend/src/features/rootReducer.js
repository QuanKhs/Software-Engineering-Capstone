import { combineReducers } from "redux";
import auth from "../app/authSlide";
import bucket from "./createBucket/bucketSlide";

const RootReducer = combineReducers({
  auth,
  bucket,
});

export default RootReducer;
