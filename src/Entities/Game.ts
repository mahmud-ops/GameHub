import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publishers";


export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    slug: string;
    description_raw: string;
    publishers: Publisher[];
}
