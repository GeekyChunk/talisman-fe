import { LinkIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { Card, CardBody, IconButton } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const WriteSection = () => {
    const router = useRouter()

    return (
        <Card className="md:mx-2 mt-4 max-w-full overflow-hidden">
            <CardBody className="p-2 flex flex-row justify-center lg:flex-nowrap lg:items-stretch lg:justify-start">
                <div className="min-w-[4rem] rounded-full overflow-hidden">
                    <img className="w-auto h-16 md:h-20 mask" src="/assets/avatar.png" alt="User Avatar" />
                </div>
                <div className="flex-grow py-2 mx-2">
                    <input onClick={() => router.push("/dash/write")} placeholder="Write post..." className="py-3 px-4 block w-full h-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none" />
                </div>
                <div className="flex flex-row items-center gap-2 md:gap-1 md:px-2">
                    <IconButton size="lg" className="h-12 w-12 md:h-14 md:w-14 btn btn-square flex">
                        <LinkIcon className="w-6 h-6 md:w-9 md:h-9" />
                    </IconButton>
                    <IconButton size="lg" className="h-12 w-12 md:h-14 md:w-14 btn btn-square">
                        <PhotoIcon className="w-6 h-6 md:w-9 md:h-9" />
                    </IconButton>
                </div>
            </CardBody>
        </Card>
    )
}

export default WriteSection
