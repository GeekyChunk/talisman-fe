import Navbar from "@/components/main/header";
import { ReactNode } from "react";

export default function Layout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="h-screen w-full flex flex-col items-stretch overflow-hidden">
            <Navbar />
            <div className="flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    )
}
