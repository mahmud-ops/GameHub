import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import type { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import type { Platform } from "./Hooks/useGames";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";


// Refactor: Extracting a universal query object
export interface GameQuery{
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>( {} as GameQuery )

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav" bgColor={'blackAlpha.100'}>
          <NavBar onSearch={(searchText) => {
            setGameQuery({...gameQuery,searchText})
          }}/>
        </GridItem>


        <Show above="lg">
          <GridItem area="aside" bgColor={'blackAlpha.100'} paddingX={2} height={'100dvh'} overflow={'auto'}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({...gameQuery,genre})}/>
          </GridItem>
        </Show>


        <GridItem area="main" fontWeight="bold" height={'100dvh'} overflow={'auto'} padding={2}>

          <GameHeading gameQuery={gameQuery}/>

          <Flex gap={2}>
          <SortSelector onSelectSortOrder={sortOrder => setGameQuery({...gameQuery,sortOrder})} />
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery,platform})}/>
          </Flex>
          <GameGrid gameQuery = {gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
