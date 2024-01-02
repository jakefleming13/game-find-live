import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    // Need a state variable for storing our game objects, and for error messages
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false); //State variable for loading skeletons

  //Use 'effect hook' to send a fetch request to the backend
  useEffect(() => {

    const controller = new AbortController(); //To handle Cancelations

    setLoading(true); //Set to true right before we call our api

    //Call '.get' with the '/games' endpoint & signal object while providing a generic type argument of our interface
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })

      //'.then' needs interfaces to allow us to call 'setGames' with the proper structure
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if( err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
    
      //include an array of dependencies, without this we constantly send requests to our backend
  }, deps ? [...deps]: []);

  return {data, error, isLoading};
};

export default useData;