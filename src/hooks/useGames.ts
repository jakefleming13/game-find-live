import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

//Properties for each game (defined on API website)
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    { params: { 
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id, 
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
     }},
    [gameQuery.genre?.id, gameQuery.platform?.id] //array of dependencies
  );

export default useGames;
