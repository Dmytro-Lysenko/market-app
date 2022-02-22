import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import favoriteReducer from "./favorite-slice";

const store = configureStore({
  reducer: { ui: uiReducer, favorite: favoriteReducer },
});

export default store;
