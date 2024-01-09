import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Genre>>('/genres')
            .then(res => res.data),
            staleTime: 24 * 60 * 60 * 1000, //apply staletime because the list of genres rarely change, 24h
            initialData: {count: genres.length, results: genres} //set initialData to static data, puts data in the cache and removes the need for a spinner
});

export default useGenres;