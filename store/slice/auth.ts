import { createSlice } from "@reduxjs/toolkit";

export type User = {
    username: string;
    avatar?: string;
    name: string;
    gender: 'male' | 'female' | 'other';
    role: 'admin' | 'normal';
}

export interface AuthState {
    profile?: User
    loggedIn: boolean
    loaded: boolean
}

const initialState: AuthState = {
    loggedIn: false,
    loaded: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { user } = action.payload;
            state.profile = user;
            state.loggedIn = true;
            state.loaded = true;
        },

        loginGuest(state) {
            state.loggedIn = false;
            state.loaded = true;
        },

        logout(state) {
            state.loggedIn = false;
            state.loaded = true;
        }
    }
})


export const { login, loginGuest, logout } = authSlice.actions;

export default authSlice.reducer;
