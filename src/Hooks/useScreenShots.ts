import { useQuery } from "@tanstack/react-query"
import type { ScreenShot } from "../Entities/ScreenShot"
import APIclient from "../Services/api-client"

const useScreenShots = (gameId: number) => {
    const apiClient = new APIclient<ScreenShot>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screenshots',gameId],
        queryFn: apiClient.getData
    })
}

export default useScreenShots