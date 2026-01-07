import { Heading } from "@chakra-ui/react"
import type { GameQuery } from "../App"
import useGenres from "../Hooks/useGenres";

interface Props {
    gameQuery: GameQuery
}


const GameHeading = ({gameQuery}:Props) => {

    const { data: genres } = useGenres();

    const selectedGenre = genres?.results.find(g => g.id === gameQuery.genreId);


    const heading = `${gameQuery.platform?.name || ''} ${selectedGenre?.name || ''} Games`
    return (
    <Heading as={'h1'} marginY={3}>{heading}</Heading>
  )
}

export default GameHeading