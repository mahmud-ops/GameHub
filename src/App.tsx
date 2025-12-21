import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg:`"nav nav" "aside main"`
      }}>
          <GridItem area="nav" bg="coral" fontWeight="bold" textAlign='center'>Nav</GridItem>
          <Show above="lg">
            <GridItem area="aside" bg="green" fontWeight="bold" textAlign='center'>Aside</GridItem>
          </Show>
            <GridItem area="main" bg="gold" fontWeight="bold" textAlign='center'>Main</GridItem>
      </Grid>
    </div>
  );
};

export default App;
