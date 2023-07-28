"use client";

import { RootState } from "@/store";
import { ILoginForm } from "@/types/login";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "./fetch";
import { login, loginGuest, logout } from "@/store/slice/auth";

export function useAuth() {
    const axios = useAxios();

    const authStore = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();


    const Login = async (form: ILoginForm) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            const resp = await axios.post('/api/auth/login/', form);
            localStorage.setItem("token", resp.data.token);
            dispatch(login({ user: resp.data.user }));
            return ({
                succeed: true,
            })
        } catch (error: any) {
            if (error?.response?.status === 401) {
                return ({
                    succeed: false,
                    type: "wrong_creds",
                })
            }

            return ({
                succeed: false,
                type: "server_error",
            })
        }
    }

    const Load = async () => {
        let token = localStorage.getItem("token") ?? undefined

        if (!token) { dispatch(loginGuest()); return }

        try {
            let rsp = await axios.get("/api/auth/profile")
            let user = rsp.data.user
            dispatch(login({ user: user }))

        } catch {
            Logout()
            localStorage.removeItem("token");
            dispatch(loginGuest());
        }
    }

    const Logout = async () => {
        localStorage.removeItem("token");
        dispatch(logout());
    }

    return { Login, Logout, Load, authStore }
}
