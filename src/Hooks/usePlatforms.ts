import { useQuery } from "@tanstack/react-query"
import APIclient from "../Services/api-client"
import type { Platform } from "./useGames"

const apiClient = new APIclient<Platform>('/platforms')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.getData({})
})

export default usePlatforms