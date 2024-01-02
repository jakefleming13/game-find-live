import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usegames";

function App() {
  //State hook for filtering games by genre
    //Also is a state hook between components so needs to be done at the highest level (App)
  const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null);

  //state variable for keeping track of the selected platform
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      //Creating the grid layout
      templateAreas={{
        base: `"nav" "main"`, //Mobile devices
        lg: `"nav nav" "aside main"` //Devices larger than 1024px
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {/* Wrap Aside in Show component to only show on large enough screens */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenres(genre)} selectedGenre={selectedGenres}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenres}/>
      </GridItem>
    </Grid>
  );
}

export default App;
