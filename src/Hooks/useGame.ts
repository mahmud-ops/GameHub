import { useQuery } from "@tanstack/react-query"
import APIclient from "../Services/api-client"
import type { Game } from "./useGames";

const apiClient = new APIclient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.getSingleData(slug)
}) 

export default useGame