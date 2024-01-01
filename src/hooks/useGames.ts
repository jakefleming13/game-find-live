import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

//Properties for each game (defined on API website)
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
  //Properties for fetching each game
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    // Need a state variable for storing our game objects, and for error messages
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false); //State variable for loading skeletons

  //Use 'effect hook' to send a fetch request to the backend
  useEffect(() => {

    const controller = new AbortController(); //To handle Cancelations

    setLoading(true); //Set to true right before we call our api

    //Call '.get' with the '/games' endpoint & signal object while providing a generic type argument of our interface
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })

      //'.then' needs interfaces to allow us to call 'setGames' with the proper structure
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if( err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
    
      //include an array of dependencies, without this we constantly send requests to our backend
  }, []);

  return {games, error, isLoading};
}

export default useGames;