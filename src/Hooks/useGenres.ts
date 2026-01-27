import { useQuery } from "@tanstack/react-query";
import APIclient from "../Services/api-client";
import type { Genre } from "../Entities/Genre";

const apiClient = new APIclient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.getData({}),
    staleTime: 24 * 60 * 60 * 1000 // 1 day

})
export default useGenres