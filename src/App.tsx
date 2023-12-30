import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      //Creating the grid layout
      templateAreas={{
        base: `"nav" "main"`, //Mobile devices
        lg: `"nav nav" "aside main"` //Devices larger than 1024px

      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      {/* Wrap Aside in Show component to only show on large enough screens */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
