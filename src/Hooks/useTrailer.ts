import { useQuery } from "@tanstack/react-query";
import type { Trailer } from "../Entities/Trailer";
import APIclient from "../Services/api-client";


const useTrailer = (gameId: number) => {
    const apiClient = new APIclient<Trailer>(`/games/${gameId}/movies`);
    
    return useQuery({
        queryKey: ['trailers',gameId],
        queryFn: apiClient.getData
    })
}

export default useTrailer;