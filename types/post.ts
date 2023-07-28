export interface IUser {
    username: string
    avatar?: string
}

export interface IPost {
    type: 'text' | 'image' | 'link',
    id: number
    slug?: string
    user: IUser
    title: string
    caption?: string
    image?: string
    link?: string
}
