import { IPost } from "@/types/post";
import { ArrowUpIcon, ArrowUturnRightIcon, BookmarkIcon, ChatBubbleLeftIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostItem = ({ post }: {
    post: IPost
}) => {
    const router = useRouter()

    return (
        <div onClick={() => { router.push(`/posts/${post.id}`) }} className="cursor-pointer bg-slate-100 card rounded-md border border-gray-300 hover:border-gray-400 overflow-hidden max-h-80 my-4">
            <div className="card-body p-0 flex flex-row items-stretch gap-0">
                <div className="hidden md:block w-12 bg-slate-200 px-1 py-4">
                    <div onClick={e => e.stopPropagation()} className="flex flex-col justify-start items-center gap-0">
                        <button className="px-1 py-1 btn btn-square border-none !bg-transparent h-auto w-auto no-animation">
                            <ChevronDoubleUpIcon className="w-8 h-8 hover:text-teal-500" />
                        </button>
                        <div className="text-center text-gray-600 font-bold cursor-pointer">
                            69
                        </div>
                        <button className="px-1 py-1 btn btn-square border-none !bg-transparent h-auto w-auto no-animation">
                            <ChevronDoubleDownIcon className="w-8 h-8 hover:text-teal-500" />
                        </button>
                    </div>
                </div>
                <div className="flex-grow relative">
                    <div className="px-4 py-3">
                        <div className="flex-row">
                            <Link onClick={e => e.stopPropagation()} href={`/u/${post.user.username}`} className="flex gap-1 items-center w-fit">
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
                    <div onClick={e => e.stopPropagation()} className="border-t border-slate-300 py-1 px-1 flex gap-2">
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

export default PostItem
