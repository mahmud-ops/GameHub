import { useParams } from "react-router-dom"
import useGame from "../Hooks/useGame"
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandibleText from "../Components/ExpandibleText";

const GameDetailsPage = () => {

    const {slug} = useParams()
    const {data: game, error, isLoading} = useGame(slug!);

    if(isLoading) return <Spinner />
    if(error || !game) throw error;

  return (
    <>
        <Heading>{game.name}</Heading>
        <br />
        <ExpandibleText>{game.description_raw}</ExpandibleText>
    </>
  )
}

export default GameDetailsPage