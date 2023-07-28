import { ArrowUpIcon, ArrowUturnRightIcon, BookmarkIcon, ChatBubbleLeftIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";


const PostItemSkeleton = () => {

    return (
        <div className="bg-slate-100 card rounded-md border border-gray-300 hover:border-gray-400 overflow-hidden max-h-80 my-4">
            <div className="card-body p-0 flex flex-row items-stretch gap-0">
                <div className="hidden md:block w-12 bg-slate-200 px-1 py-4">
                    <div className="flex flex-col justify-start items-center gap-0">
                        <button className="px-1 py-1 btn btn-square border-none !bg-transparent h-auto w-auto no-animation">
                            <ChevronDoubleUpIcon className="w-8 h-8 hover:text-teal-500" />
                        </button>
                        <div className="text-center text-gray-600 font-bold cursor-pointer">
                            0
                        </div>
                        <button className="px-1 py-1 btn btn-square border-none !bg-transparent h-auto w-auto no-animation">
                            <ChevronDoubleDownIcon className="w-8 h-8 hover:text-teal-500" />
                        </button>
                    </div>
                </div>
                <div className="flex-grow relative">
                    <div className="px-4 py-3">
                        <div className="flex-row">
                            <div className="flex items-center w-fit gap-3 animate-pulse">
                                <div className="flex-shrink-0">
                                    <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
                                </div>
                                <div className="">
                                    <h3 className="h-5 w-36 bg-gray-200 rounded-md dark:bg-gray-700"></h3>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <h1 className="text-2xl text-slate-800 font-medium">
                            </h1>
                        </div>
                        <div className="text-lg text-slate-700">
                            <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{ width: "40%" }}></h3>

                            <ul className="mt-5 space-y-3">
                                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-300 py-1 px-1 flex gap-2">
                        <div className="flex md:hidden">
                            <button className="btn text-gray-500 rounded-md no-animation">
                                <ChevronDoubleUpIcon strokeWidth={2.0} className="w-6 h-6 hover:text-teal-500" />
                            </button>
                            <button className="px-2 font-bold text-gray-500 rounded-md no-animation">
                                69
                            </button>
                            <button className="btn text-gray-500 rounded-md no-animation">
                                <ChevronDoubleDownIcon strokeWidth={2.0} className="w-6 h-6 hover:text-teal-500" />
                            </button>
                        </div>

                        <div className="flex relative">
                            <button className="btn text-gray-500 rounded-md no-animation hover:text-teal-500">
                                <ChatBubbleLeftIcon strokeWidth={2.0} className="w-6 h-6" />
                                <span className="hidden md:block">
                                    Comments
                                </span>
                            </button>
                            <button className="hidden sm:flex btn text-gray-500 rounded-md no-animation hover:text-teal-500">
                                <BookmarkIcon strokeWidth={2.0} className="w-6 h-6" />
                                <span className="hidden md:block">
                                    Save
                                </span>
                            </button>
                            <button className="hidden sm:flex btn text-gray-500 rounded-md no-animation hover:text-teal-500">
                                <ArrowUturnRightIcon strokeWidth={2.0} className="w-6 h-6" />
                                <span className="hidden md:block">
                                    Share
                                </span>
                            </button>
                            <button className="sm:hidden btn text-gray-500 rounded-md no-animation">
                                <EllipsisVerticalIcon strokeWidth={2.0} className="w-6 h-6" />
                                <span className="hidden md:block">
                                    More
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemSkeleton
