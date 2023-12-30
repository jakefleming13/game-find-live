import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      //Creating the grid layout
      templateAreas={{
        base: `"nav" "main"`, //Mobile devices
        lg: `"nav nav" "aside main"` //Devices larger than 1024px

      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {/* Wrap Aside in Show component to only show on large enough screens */}
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
