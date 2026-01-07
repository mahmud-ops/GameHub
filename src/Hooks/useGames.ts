import { useInfiniteQuery, type QueryFunctionContext } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIclient, { type FetchResponse } from "../Services/api-client";

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

const apiClient = new APIclient<Game>('/games')

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games',gameQuery],
    queryFn: ({pageParam = 1}:QueryFunctionContext) => apiClient.getData({
        params: {
            genres: gameQuery.genreId,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
            page_size: gameQuery.pageSize,
        },
    }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
})

export default useGames