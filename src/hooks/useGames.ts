import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//Properties for each game
export interface Game {
    id: number;
    name: string;
    background_image: string;

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

  //Use 'effect hook' to send a fetch request to the backend
  useEffect(() => {

    const controller = new AbortController(); //To handle Cancelations

    //Call '.get' with the '/games' endpoint & signal object while providing a generic type argument of our interface
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })

      //'.then' needs interfaces to allow us to call 'setGames' with the proper structure
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if( err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
    
      //include an array of dependencies, without this we constantly send requests to our backend
  }, []);

  return {games, error};
}

export default useGames;