import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="pink">{error}</Text>}
        <SimpleGrid columns={{
            sm:1,md:2,lg:3
        }} spacing={10} padding={10}>
            {
                games.map(game => (
                    <GameCard game={game}/>
                ))
            }
        </SimpleGrid>
    </>
  );
}
