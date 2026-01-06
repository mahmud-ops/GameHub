import axios, { type AxiosRequestConfig } from "axios"

export interface FetchResponse <T>{
    count: number
    results: T[]
}

const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api/",
    params: {
        key: "edc33b6627ab49758623e89139ed798b"
    }
})

class APIclient <T> {
    endpoint : string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getData = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIclient;