import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../Hooks/useGames";
import type { Genre } from "../Hooks/useGenres";
import type { GameQuery } from "../App";

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms: {platform:Platform}[],
    metacritic: number
}

interface Props {
  gameQuery: GameQuery
}

export default function GameGrid({gameQuery}:Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && <Text color="pink">{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
