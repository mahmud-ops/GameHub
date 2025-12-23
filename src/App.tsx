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
      >
        <GridItem area="nav" fontWeight="bold" textAlign="center">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" fontWeight="bold" textAlign="center">
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
