export enum GridItemType {
    GridImage = 'GridImage',
    GridText = 'GridText',
    GridVideo = 'GridVideo'
}

export enum GridType {
    TikTok = 'TikTok',
    Reels = 'Reels',
}

export interface GridItem {
    type: GridItemType;
    url?: string;
    value: string;
    gridType?: GridType; // Dodano typ gridType
}