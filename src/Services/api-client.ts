import axios from "axios"

export interface FetchResponse <T>{
    count: number
    results: T[]
}

const apiClient = axios.create({
    baseURL:"https://api.rawg.io/api/",
    params: {
        key: "edc33b6627ab49758623e89139ed798b"
    }
})

export default apiClient;