import { useQuery } from "@tanstack/react-query"
import apiClient from "../Services/api-client"
import type { FetchResponse } from "./useData"
import type { Platform } from "./useGames"

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () =>  apiClient.get<FetchResponse<Platform>>('/platforms').then(res => res.data)
})

export default usePlatforms