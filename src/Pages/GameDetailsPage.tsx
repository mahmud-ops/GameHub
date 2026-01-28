import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandibleText from "../Components/ExpandibleText";
import useGame from "../Hooks/useGame";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <br />
      <ExpandibleText>{game.description_raw}</ExpandibleText>
      <GameAttributes game={game}/>
      <GameTrailer gameId={game.id}/>
    </>
  );
};

export default GameDetailsPage;
