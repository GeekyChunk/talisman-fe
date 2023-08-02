"use client";

import { IPostDetail } from "@/types/post";
import { ArrowUturnRightIcon, BookmarkIcon, ChatBubbleLeftIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Button, Card } from "@material-tailwind/react";
import Link from "next/link";

const PostItem = ({ post }: {
    post: IPostDetail
}) => {

    return (
        <div className="mt-8">
            <Card className="">
                <div className="card-body p-0 flex flex-row items-stretch gap-0">
                    <div className="flex-grow relative">
                        <div className="px-4 py-3">
                            <div className="flex-row">
                                <Link href={`/u/${post.user.username}`} className="flex gap-1 items-center w-fit">
                                    <img className="h-12 w-12 rounded-full overflow-hidden" src="/assets/avatar.png" alt="" />
                                    <div className="font-bold cursor-pointer hover:underline">
                                        u/{post.user.username}
                                    </div>
                                </Link>
                            </div>
                            <div className="py-3">
                                <h1 className="text-2xl text-slate-800 font-medium">{post.title}</h1>
                            </div>
                            <div className="text-lg text-slate-700">
                                {post.caption}
                            </div>
                        </div>
                        <div className="border-t border-slate-300 py-1 px-1 flex gap-2">
                            <div className="flex flex-wrap relative">
                                <Button variant="text" color="blue-gray" className="flex items-center gap-2">
                                    <ChatBubbleLeftIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Comments
                                    </span>
                                </Button>
                                <Button variant="text" color="blue-gray" className="hidden sm:flex items-center gap-2">
                                    <BookmarkIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Save
                                    </span>
                                </Button>
                                <Button variant="text" color="blue-gray" className="hidden sm:flex items-center gap-2">
                                    <ArrowUturnRightIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        Share
                                    </span>
                                </Button>
                                <Button className="sm:hidden btn text-gray-500 rounded-md no-animation">
                                    <EllipsisVerticalIcon strokeWidth={2.0} className="w-6 h-6" />
                                    <span className="hidden md:block">
                                        More
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PostItem
