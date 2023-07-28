export default function Loading({
    className
}: {
    className?: string;
}) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <span className={`loading loading-bars loading-lg ${className ?? ""}`}></span>
        </div>
    )
}
