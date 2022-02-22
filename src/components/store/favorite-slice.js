import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    isFavorite: null,
  },
  reducers: {
    isFavorite(state) {
      state.isFavorite = true;
    },

    addToFavorite(state, action) {
      const newUser = action.payload;
      if (state.favoriteProducts.some((product) => product.id === newUser.id)) {
        state.favoriteProducts = state.favoriteProducts.filter((product) => product.id !== newUser.id);
      } else {
        state.favoriteProducts.push(newUser);
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
