import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getAuthLogin = createAsyncThunk("auth/Login", async (params, thunAPI) => {
//   const user = await AuthApi.Login(params);
//   return user;
// });

const Login = createSlice({
  name: "login",
  initialState: {
    auth: {},
    isLogin: localStorage.getItem("userID") ? true : false,
  },
  reducers: {
    isLoginOn: (state) => {
      state.isLogin = true;
      return state;
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

const { reducer, actions } = Login;
export const { isLoginOn } = actions;
export default reducer;
