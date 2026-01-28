import { Heading, Spinner, Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandibleText from "../Components/ExpandibleText";
import useGame from "../Hooks/useGame";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";
import GameScreenShots from "../Components/GameScreenShots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <br />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(3,1fr)" }}
        gap={3}
      >
        <GridItem colSpan={2}>
          <ExpandibleText>{game.description_raw}</ExpandibleText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenShots gameId={game.id} />
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetailsPage;
