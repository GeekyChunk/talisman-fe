"use client";
import { IPostComment } from "@/types/post";
import { ArrowUturnRightIcon, ArrowsPointingOutIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, HeartIcon } from "@heroicons/react/24/outline"
import { Button, Card, IconButton } from "@material-tailwind/react";
import { ReactNode, useState } from "react"

export default function Comment({ comment, children }: {
    comment?: IPostComment,
    children: ReactNode
}) {

    return (
        <div className="w-full flex items-center gap-2 px-3 pt-4 my-4">
            <div className="flex-grow flex flex-col">
                <div className="w-full flex gap-2 justify-start items-center">
                    <img className="w-12 h-12 rounded-full border-2 border-gray-400" src="/assets/avatar.png" alt="" />
                    <div className="">
                        <h1 className="font-bold text-gray-700">{comment?.user.username}</h1>
                    </div>
                </div>
                <div className="flex pt-2">
                    <div className="flex-grow">
                        <div className="px-2">
                            <p className="text-slate-700">
                                {comment?.caption}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                        <IconButton variant="text" color="red">
                            <HeartIcon strokeWidth={2.0} className="w-7 h-7" />
                        </IconButton>
                        <div className="text-blue-gray-700 text-lg">
                            <span>69</span>
                        </div>
                    </div>
                    <Button variant="text" color="blue-gray" size="sm" className="flex gap-2 items-center">
                        <ArrowUturnRightIcon strokeWidth={2.0} className="w-7 h-7 text-slate-500 group-hover:text-blue-600" />
                        Share
                    </Button>
                </div>
            </div>
        </div>
    )
}
