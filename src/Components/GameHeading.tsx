import { Heading } from "@chakra-ui/react"
import useGenres from "../Hooks/useGenres";
import usePlatforms from "../Hooks/usePlatforms";
import useGameQueryStore from "../Store";

const GameHeading = () => {

  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);

  const { data: genres } = useGenres();
  const {data: platforms } = usePlatforms();
  
  const selectedGenre = genres?.results.find(g => g.id === genreId);
  const selectedPlatform = platforms?.results.find(p => p.id === platformId);
  

    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`
    return (
    <Heading as={'h1'} marginY={3}>{heading}</Heading>
  )
}

export default GameHeading