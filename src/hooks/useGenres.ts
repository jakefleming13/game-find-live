import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: 
        apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //apply staletime because the list of genres rarely change, 24h
        initialData: {count: genres.length, results: genres, next: null} //set initialData to static data, puts data in the cache and removes the need for a spinner
});

export default useGenres;