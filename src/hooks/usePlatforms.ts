import useData from "./useData";

interface Platform{
    id:number;
    name:string;
    slug:string;
}

//Call our useData hook with a new endpoint to fetch the info we need
const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;