import Navbar from "../../components/main/navbar";

export default function DashLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="h-screen w-full flex flex-col items-stretch overflow-hidden">
                <Navbar />
                <div className="flex-grow overflow-hidden">
                    {children}
                </div>
            </div>
        </>
    )
}
