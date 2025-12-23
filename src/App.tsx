import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

const App = () => {
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
          <GridItem area="aside" bgColor={'blackAlpha.100'} paddingX={2}>
            <GenreList />
          </GridItem>
        </Show>


        <GridItem area="main" fontWeight="bold">
          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
