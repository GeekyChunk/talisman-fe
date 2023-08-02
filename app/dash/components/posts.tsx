import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from "@/components/core/post/post";
import PostItemSkeleton from "@/components/skeleton/post";
import { IPost } from "@/types/post";

const PostsList = ({ posts, next, hasMore }: {
    posts?: IPost[],
    next: Function,
    hasMore: boolean,
}) => {

    return (
        <div className="w-full h-full px-2 py-4">
            {
                posts ? (
                    <InfiniteScroll
                        next={() => next()}
                        hasMore={hasMore}
                        loader={<PostItemSkeleton />}
                        endMessage={<div className="py-2 text-center font-bold text-gray-500">No More post :)</div>}
                        dataLength={posts.length}
                        scrollableTarget="postcontainer"
                    >
                        {
                            posts.map((post, i) => (
                                <PostItem post={post} key={i} />
                            ))
                        }
                    </InfiniteScroll>
                ) : null
            }
        </div>
    )
}

export default PostsList
