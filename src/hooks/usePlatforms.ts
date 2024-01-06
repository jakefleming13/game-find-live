import platforms from "../data/platforms";

interface Platform{
    id:number;
    name:string;
    slug:string;
}

//Call our useData hook with a new endpoint to fetch the info we need
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;