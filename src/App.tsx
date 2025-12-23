import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from "react";
import type { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";

const App = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <NavBar />
        </GridItem>


        <Show above="lg">
          <GridItem area="aside" bgColor={'blackAlpha.100'} paddingX={2} height={'100dvh'} overflow={'auto'}>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={genre => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>


        <GridItem area="main" fontWeight="bold" height={'100dvh'} overflow={'auto'} padding={2}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
