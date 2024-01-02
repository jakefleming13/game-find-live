import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => //params is from Axios
  useData<Game>("/games", { params: { genres: selectedGenre?.id }}, [selectedGenre?.id]);

export default useGames;
