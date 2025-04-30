
export enum SocialItemType {
    video = 'video',
    image = 'image',
}

export interface SocialItem {
    type: SocialItemType;
    value: string;
}