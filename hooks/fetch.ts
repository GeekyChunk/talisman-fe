import axios from "axios";
import { publicRuntimeConfig } from "@/next.config";

export const useFetcher = () => {
    const instance = axios.create({
        baseURL: publicRuntimeConfig?.BASEAPI
    });

    return instance;
}

export const useAxios = () => {
    const instance = axios.create({
        baseURL: publicRuntimeConfig?.BASEAPI
    });

    instance.interceptors.request.use(
        async config => {
            const token = localStorage.getItem("token")
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        error => {
            Promise.reject(error)
        }
    );

    return instance;
}
