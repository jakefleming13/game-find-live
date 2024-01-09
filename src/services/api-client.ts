import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null,
    results: T[];
}

//call '.create' to create an axios instance with a custome configuration, export as a defualt object
const axiosInstance =  axios.create({
    //Endpoint found within the RAWG Api
    baseURL: 'https://api.rawg.io/api',

    // With this config, this key will be included in the query string of every HTTP request sent to our backend
    params:{
        key: 'b276ae51e78c48ea81b66093626db8e9'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance    
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data) //extract the data from the response
    }
}

export default APIClient;