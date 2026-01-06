import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import type { GameQuery } from "../App";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const allGames = data?.pages.flatMap((page) => page.results) || [];
  const totalGames = allGames.length;

  return (
    <>
      {error && <Text color="pink">{error.message}</Text>}
      <InfiniteScroll
        dataLength={totalGames}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Flex justifyContent="center" py={4}><Spinner /></Flex>}
        endMessage={<Text>No more games to load</Text>}
        scrollableTarget="main-grid"
      >
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
          {allGames.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}
