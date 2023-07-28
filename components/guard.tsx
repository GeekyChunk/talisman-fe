'use client';
import { useAuth } from "@/hooks/auth";
import Loading from "./core/loading";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectToLogin = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/auth/login/")
    }, []);
    return (<></>);
}

const RedirectToPanel = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/dash/")
    }, []);
    return (<></>);
}

export default function Guard({
    children,
    guestOnly,
    roles
}: {
    children: ReactNode,
    guestOnly?: boolean,
    roles?: string[],
}) {
    const auth = useAuth();

    if (!auth.authStore.loaded) {
        return <Loading />
    }

    if (auth.authStore.loggedIn && guestOnly) {
        return <RedirectToPanel />
    }

    if (!auth.authStore.loggedIn && roles) {
        return <RedirectToLogin />
    }

    return (
        <>
            {children}
        </>
    )
}
