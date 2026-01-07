import { Heading } from "@chakra-ui/react"
import type { GameQuery } from "../App"
import useGenres from "../Hooks/useGenres";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery
}


const GameHeading = ({gameQuery}:Props) => {
  
  const { data: genres } = useGenres();
  const {data: platforms } = usePlatforms();
  
  const selectedGenre = genres?.results.find(g => g.id === gameQuery.genreId);
  const selectedPlatform = platforms?.results.find(p => p.id === gameQuery.platformId);
  

    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`
    return (
    <Heading as={'h1'} marginY={3}>{heading}</Heading>
  )
}

export default GameHeading