import { useQuery } from "@tanstack/react-query"
import apiClient, { type FetchResponse } from "../Services/api-client"
import type { Platform } from "./useGames"

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () =>  apiClient.get<FetchResponse<Platform>>('/platforms').then(res => res.data)
})

export default usePlatforms