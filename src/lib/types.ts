export interface UserProps {
    name: string;
    email: string;
    image: string;
    role: string;
    bio: string;
}

export interface PostHeaderProps {
    title: string;
    description: string | null;
    imageUrl: string | null;
    category: string | null;
    createdAt: Date;
    minRead: number;
}

export interface PostAuthorProps {
    name: string;
    image: string;
    bio: string;
}
