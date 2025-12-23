import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms: {platform:Platform}[],
    metacritic: number
}

export interface FetchGamesResponse{
    count: number,
    results: Game[]
}

const useGames = () => {
        const [games,setGames] = useState<Game[]>([]);
        const [error,setError] = useState();
        const [isLoading, setLoading] = useState(false);
    
        useEffect(() => {
            setLoading(true);  

            const controller = new AbortController();

            apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
                setLoading(false);
            })
            .catch(err => {
                if(err.name === 'CanceledError') return;
                setError(err.message)
                setLoading(false);
            })

            return () => controller.abort();
        },[])

        return {games, error, isLoading};
}

export default useGames