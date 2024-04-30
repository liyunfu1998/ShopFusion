import { createSlice } from "@reduxjs/toolkit";

const token = "";
const initialState = { token };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log("userLogin", action.payload);
      state.token = action.payload;
    },
    userLogout: state => {
      state.token = "";
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
