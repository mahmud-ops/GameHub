import useData from "./useData"
import type { Platform } from "./useGames"

const usePlatforms = () => {
  return (
        useData<Platform>('./platforms/lists/parents')
    )
}

export default usePlatforms