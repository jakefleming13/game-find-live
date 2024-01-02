import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id:number;
    name:string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    // Need a state variable for storing our game objects, and for error messages
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false); //State variable for loading skeletons

  //Use 'effect hook' to send a fetch request to the backend
  useEffect(() => {

    const controller = new AbortController(); //To handle Cancelations

    setLoading(true); //Set to true right before we call our api

    //Call '.get' with the '/games' endpoint & signal object while providing a generic type argument of our interface
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })

      //'.then' needs interfaces to allow us to call 'setGames' with the proper structure
      .then((res) => {
        setGenres(res.data.results);
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

  return {genres, error, isLoading};
};

export default useGenres;