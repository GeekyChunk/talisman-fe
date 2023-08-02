import { FireIcon, HashtagIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "@material-tailwind/react";

type IFeedItem = {
    icon: JSX.Element;
    name: string;
}

const FeedItem = ({ icon, name }: IFeedItem) => {
    return (
        <div className="px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-xl">
            <div className="flex gap-2 items-center">
                <div>
                    {icon}
                </div>
                <div className="text-lg md:text-xl font-bold">{name}</div>
            </div>
        </div>
    )
}


export default function FeedBar() {
    return (
        <Card>
            <CardBody className="py-3 px-2">
                <div className="text-center text-xl md:text-2xl font-semibold text-gray-50-600">Trends</div>
                <div className="flex flex-col gap-0 text-blue-gray-50-600">
                    <FeedItem
                        name="Technology"
                        icon={<HashtagIcon
                            stroke="currentColor"
                            strokeWidth={2.8}
                            className="w-5 h-5 md:w-6 md:h-6" />} />
                    <FeedItem
                        name="Bulshit 1"
                        icon={<FireIcon
                            stroke="currentColor"
                            strokeWidth={2.8}
                            className="w-5 h-5 md:w-6 md:h-6" />} />
                </div>
            </CardBody>
        </Card>
    )
}
