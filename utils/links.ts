
type LinkType = {
    id: number;
    label: string;
    path: string;
}

export const links: LinkType[] = [
    {
        id: 1,
        label: 'Home',
        path: '/'
    },
    {
        id: 2,
        label: 'Favorites',
        path: '/favorites'
    },
]