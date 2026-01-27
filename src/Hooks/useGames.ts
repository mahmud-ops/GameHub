import { useInfiniteQuery, type QueryFunctionContext } from "@tanstack/react-query";
import APIclient, { type FetchResponse } from "../Services/api-client";
import useGameQueryStore from "../Store";
import type { Game } from "../Entities/Game";

const apiClient = new APIclient<Game>('/games')

const useGames = () => 

    {
    const gameQuery = useGameQueryStore(s => s.gameQuery);

        return useInfiniteQuery<FetchResponse<Game>,Error>({
            queryKey: ['games',gameQuery],
            queryFn: ({pageParam = 1}:QueryFunctionContext) => apiClient.getData({
        params: {
            genres: gameQuery.genreId,
            platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
        },
    }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
})

}
export default useGames