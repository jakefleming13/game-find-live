import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
    //Creating the grid layout
    templateAreas={{
      base: `"main"`, //Mobile devices
      lg: `"aside main"`, //Devices larger than 1024px
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
  >
    {/* Wrap Aside in Show component to only show on large enough screens */}
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList/>
      </GridItem>
    </Show>

    <GridItem area="main">
      <Box paddingLeft={2}>
        <GameHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector/>
          </Box>
          <SortSelector/>
        </Flex>
      </Box>
      <GameGrid/>
    </GridItem>
  </Grid>
  )
}

export default HomePage