import {createSlice} from '@reduxjs/toolkit';
const initialState = true;
const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeBoolean: (state = initialState, action) => {
      return (state = action.payload);
    },
  },
});
export const {setThemeBoolean} = ThemeSlice?.actions;
export default ThemeSlice.reducer;
