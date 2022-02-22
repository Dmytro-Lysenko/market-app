import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    login: false,
    notification: null,
    users: [],
    userLogin: null,
  },
  reducers: {
    toogle(state) {
      state.login = !state.login;
    },

    addUser(state, action) {
      const newUser = action.payload;
      console.log(newUser);
      state.users.push(newUser);
    },

    loginUser(state, action) {
      const enteredUser = action.payload;
      console.log(enteredUser);
      const isEmailCorrect = state.users.some(
        (user) => user.email === enteredUser.email
      );
      if (isEmailCorrect) {
        state.userLogin = enteredUser.email;
      }
      
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
