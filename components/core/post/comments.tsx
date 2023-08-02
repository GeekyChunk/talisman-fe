import { IPostComment, IPostDetail } from "@/types/post";
import Comment from "../comment";

export default function PostComments({ comments }: { comments?: IPostComment[] }) {
    return (
        <div className="my-2 px-2 py-4">
            <div className="px-4">
                {
                    comments?.map((comment, i) => (
                        <Comment key={i} comment={comment}>
                        </Comment>
                    ))
                }
            </div>
        </div>
    )
}
