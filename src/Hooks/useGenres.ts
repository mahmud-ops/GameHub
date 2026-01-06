import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../Services/api-client";

export interface Genre{
    id: number
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn:() => apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000 // 1 day

})
export default useGenres