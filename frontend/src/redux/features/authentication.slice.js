import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isClicked: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    setClicked: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});

export const { setUser, setClicked } = authenticationSlice.actions;
export default authenticationSlice.reducer;
