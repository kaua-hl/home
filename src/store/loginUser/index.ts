import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/types";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../../services/firebase/firebase";

const initialState = {
  loading: true,
  logged: false,
  data: [],
} as User;

const auth = getAuth();
export const getUser = createAsyncThunk(
  "get/user",
  async ({ email, password }: any): Promise<void> => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
);

const loginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    logout(state) {
      state.logged = false;
      state.data = [];
    },
  },
});

export const { logout } = loginUser.actions;
export default loginUser.reducer;
