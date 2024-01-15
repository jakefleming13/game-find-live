import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

//Call our useData hook with a new endpoint to fetch the info we need
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: 
        apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: {count: platforms.length, results: platforms, next: null}
})

export default usePlatforms;