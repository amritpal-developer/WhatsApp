import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
const Store = configureStore({
    reducer: {
        name:ThemeSlice,
    },

  });
  export default Store;