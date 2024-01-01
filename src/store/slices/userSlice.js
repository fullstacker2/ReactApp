import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        createSession:(state,action) => action.payload,
        clearSession: (state,action) => null,
    },
})

export const{createSession, clearSession} = userSlice.actions;
export default userSlice.reducer;