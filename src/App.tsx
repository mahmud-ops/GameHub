import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

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
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" fontWeight="bold" textAlign="center">
          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
