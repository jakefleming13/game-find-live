import { Platform } from "./Platform";

//Properties for each game (defined on API website)

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
  description: HTMLElement;
}
