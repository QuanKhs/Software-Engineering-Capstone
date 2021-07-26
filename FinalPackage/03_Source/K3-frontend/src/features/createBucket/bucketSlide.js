import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getAuthLogin = createAsyncThunk("auth/Login", async (params, thunAPI) => {
//   const user = await AuthApi.Login(params);
//   return user;
// });

const Bucket = createSlice({
  name: "bucket",
  initialState: {
    listBucket: [],
  },
  reducers: {
    AddBucket: (state, action) => {
      state.listBucket.push(action.payload);
    },
  },
  //   extraReducers: {
  //     [getAuthLogin.pending]: () => {},
  //     [getAuthLogin.rejected]: () => {},
  //     [getAuthLogin.fulfilled]: (state, action) => {
  //       state.auth = action.payload;
  //     },
  //   },
});

const { reducer, actions } = Bucket;
export const { AddBucket } = actions;
export default reducer;
