import { createSlice } from "@reduxjs/toolkit";

const themeSlice =createSlice({
    name:'theme',
    initialState:'light',
    reducers:{
        // state : data inside the store
        changeTheme:(state, action) => {
            // return updated data to the store
            // payload : data to be sent to the store by a component
            return action.payload;
        },
    },
});
// actions will be used by the component to make data changes
export const{changeTheme} = themeSlice.actions;
// reducer will be used by the store
export default themeSlice.reducer;