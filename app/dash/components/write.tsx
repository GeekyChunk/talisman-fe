import { LinkIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const WriteSection = () => {
    const router = useRouter()

    return (
        <div className="rounded-none md:rounded-lg card shadow-md bg-gray-100 md:mx-2 mt-4">
            <div className="card-body p-2 flex flex-row justify-center lg:flex-nowrap lg:items-stretch lg:justify-start">
                <div className="min-w-[4rem] rounded-full overflow-hidden">
                    <img className="w-auto h-16 md:h-20 mask" src="/assets/avatar.png" alt="User Avatar" />
                </div>
                <div className="flex-grow py-2">
                    <input onClick={() => router.push("/dash/write")} placeholder="Write post..." className="input input-bordered rounded-sm border-slate-300 h-full w-full min-h-12" />
                </div>
                <div className="flex flex-row items-center gap-0 md:gap-1 md:px-2">
                    <button className="h-12 w-12 md:h-14 md:w-14 btn btn-square flex">
                        <LinkIcon className="w-6 h-6 md:w-9 md:h-9 fill-gray-500" />
                    </button>
                    <button className="h-12 w-12 md:h-14 md:w-14 btn btn-square">
                        <PhotoIcon className="w-6 h-6 md:w-9 md:h-9 fill-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WriteSection
