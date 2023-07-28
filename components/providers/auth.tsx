"use client";

import { useAuth } from "@/hooks/auth";
import { ReactNode, useEffect } from "react";

export default function AuthProvider({
    children
} : {
    children: ReactNode
}) {

    const auth = useAuth();

    useEffect(() => {
        auth.Load();
    }, []);

    return (
        <>
            {children}
        </>
    )
}
