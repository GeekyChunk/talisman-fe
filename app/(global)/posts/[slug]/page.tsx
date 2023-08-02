import PostComments from "@/components/core/post/comments";
import PostDetail from "@/components/core/post/detail";
import { useFetcher } from "@/hooks/fetch"
import { IPostDetail } from "@/types/post";

async function getData(id: number) {
    const fetcher = useFetcher();
    const resp = await fetcher.get(`/api/posts/${id}`);
    return resp.data;

}

export default async function Page({ params }: { params: { slug: string } }) {
    const post: IPostDetail = await getData(Number(params.slug));
    return (
        <div className="container mx-auto max-w-4xl">
            <PostDetail post={post} />
            <PostComments comments={post.comments} />
        </div>
    )
}
