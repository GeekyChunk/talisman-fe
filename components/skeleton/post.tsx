import { ArrowUpIcon, ArrowUturnRightIcon, BookmarkIcon, ChatBubbleLeftIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const PostItemSkeleton = () => {

    return (
        <Card className="w-auto my-4 overflow-hidden cursor-pointer animate-pulse">
            <CardBody className="p-0 w-auto min-w-0">
                <div className="p-0 flex flex-row items-stretch gap-0">
                    <div className="hidden md:block bg-gray-50 px-2 py-4 border-r-2 border-r-gray-100">
                        <div onClick={e => e.stopPropagation()} className="flex flex-col justify-start items-center gap-2 rounded-xl overflow-hidden bg-blue-gray-50 w-10">
                            <IconButton variant="text" color="blue" className="px-1 py-1 rounded-none !shadow-none m-0">
                                <ChevronDoubleUpIcon className="w-8 h-8" />
                            </IconButton>
                            <Button variant="text" color="white" className="!cursor-default text-blue-gray-700 text-base py-0 !shadow-none border-none m-0 border-0 !bg-transparent">
                                69
                            </Button>
                            <IconButton variant="text" color="red" className="px-1 py-1 rounded-none !shadow-none m-0">
                                <ChevronDoubleDownIcon className="w-8 h-8" />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex-grow relative">
                        <div className="px-4 py-3">
                            <div className="flex-row">
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
                                    <div>
                                        <div className=" appearance-none w-32 h-4 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{ width: "40%" }}></h3>
                            </div>
                            <div className="text-lg text-slate-700">
                                <ul className="mt-5 space-y-3">
                                    <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                    <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                    <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                    <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                </ul>
                            </div>
                        </div>
                        <div onClick={e => e.stopPropagation()} className="border-t border-slate-300 pt-2 pb-3 px-3 flex gap-2 items-center">
                            <div className="flex md:hidden bg-blue-gray-50 rounded-xl overflow-hidden">
                                <IconButton variant="text" color="blue" className="rounded-none">
                                    <ChevronDoubleUpIcon strokeWidth={2.0} className="w-6 h-6" />
                                </IconButton>
                                <IconButton className="text-base font-semibold text-blue-gray-700 !bg-transparent hover:bg-blue-50 !shadow-none h-auto py-2 px-4">
                                    69
                                </IconButton>
                                <IconButton variant="text" color="red" className="rounded-none">
                                    <ChevronDoubleDownIcon strokeWidth={2.0} className="w-6 h-6" />
                                </IconButton>
                            </div>

                            <div className="flex flex-wrap gap-2 text-base font-bold">
                                <Button variant="text" color="blue-gray" className="flex gap-2 items-center">
                                    <ChatBubbleLeftIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Comments
                                    </span>
                                </Button>
                                <Button variant="text" color="blue-gray" className="hidden sm:flex gap-2 items-center">
                                    <BookmarkIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Save
                                    </span>
                                </Button>
                                <Button variant="text" color="blue-gray" className="hidden sm:flex gap-2 items-center">
                                    <ArrowUturnRightIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Share
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PostItemSkeleton
