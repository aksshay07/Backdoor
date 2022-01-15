import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        id: undefined,
        username: undefined,
        permissionLevel: 1,
    },
    reducers: {
        authenticate: state => {
            state.isAuthenticated = true;
        },
        deauthenticate: state => {
            state.isAuthenticated = false;
        },
        setId: (state, action) => {
            state.id = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPermissionLevel: (state, action) => {
            state.permissionLevel = action.payload;
        }
    }
});

export const {
    authenticate,
    deauthenticate,
    setId,
    setUsername,
    setPermissionLevel
} = userSlice.actions;

export default userSlice.reducer;