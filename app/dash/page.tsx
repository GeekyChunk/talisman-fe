"use client";
import Guard from "@/components/guard";
import FeedBar from "./components/feeds";
import WriteSection from "./components/write";
import { useEffect, useState } from "react";
import { useFetcher } from "@/hooks/fetch";
import type { IPost } from "@/types/post";
import PostsList from "./components/posts";

export default function Dashboard() {
    const [posts, setPosts] = useState<IPost[]>()
    const [hasMore, sethasMore] = useState(true)
    const fetcher = useFetcher()

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const resp = await fetcher.get('/api/feed/');
            const data: IPost[] = resp.data;
            setPosts(data);

        } catch (error) { }
    }

    const loadMore = async () => {
        try {
            const resp = await fetcher.post('/api/feed/more', {
                offset: posts?.length ?? 0
            });

            await (() => new Promise(
                (resolve) => setTimeout(() => resolve(null), 2000)
            ))()

            if (resp.data.length > 0 && posts) {
                setPosts([...posts, ...resp.data])
            } else {
                sethasMore(false)
            }
        } catch (error) { }

    }


    return (
        <>
            <div className="container mx-auto max-w-7xl w-full h-full">
                <div className="w-full h-full flex flex-row-reverse items-stretch">
                    <div className="hidden w-96 lg:flex flex-col justify-start py-4 mx-4">
                        <div className="py-4 h-full overflow-y-auto">
                            <FeedBar />
                        </div>
                    </div>
                    <div className="flex-1 py-4 h-full">
                        <div id="postcontainer" className="h-full overflow-x-hidden overflow-y-auto px-2">
                            <WriteSection />
                            <div>
                                <PostsList hasMore={hasMore} next={loadMore} posts={posts} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
