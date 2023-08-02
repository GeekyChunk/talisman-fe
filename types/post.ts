export interface IPostAuthor {
    username: string
    avatar?: string
    name: string
}

export interface IPost {
    type: 'text' | 'image' | 'link',
    id: number
    slug?: string
    user: IPostAuthor
    title: string
    caption?: string
    image?: string
    link?: string
}

export interface IPostComment {
    user: IPostAuthor
    replyTo?: IPostComment
    caption: string
}

export interface IPostDetail {
    id: number
    slug?: string
    user: IPostAuthor
    title: string
    caption?: string
    image?: string
    link?: string
    comments?: IPostComment[]
}
