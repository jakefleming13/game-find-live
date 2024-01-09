import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

//call '.create' to create an axios instance with a custome configuration, export as a defualt object
export default axios.create({
    //Endpoint found within the RAWG Api
    baseURL: 'https://api.rawg.io/api',

    // With this config, this key will be included in the query string of every HTTP request sent to our backend
    params:{
        key: 'b276ae51e78c48ea81b66093626db8e9'
    }
})