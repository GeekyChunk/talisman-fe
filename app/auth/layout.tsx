import { ReactNode } from "react"

export default function AuthLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="h-screen w-full bg-slate-200 flex justify-center items-center">
            <div className="w-full max-w-2xl flex justify-center pb-20">
                {children}
            </div>
        </div>
    )
}
