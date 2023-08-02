import Header from "@/components/main/header"

export default function DashLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-full flex flex-col items-stretch overflow-hidden">
            <Header />
            <div className="flex-grow overflow-hidden w-full">
                {children}
            </div>
        </div>
    )
}
