import {
  Flex,
  Grid,
  GridItem,
  Show,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import { useOutletContext } from "react-router-dom";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  const { isOpen, onClose } = useOutletContext<{
    isOpen: boolean;
    onClose: () => void;
  }>();

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem
            area="aside"
            bgColor={"blackAlpha.100"}
            paddingX={2}
            height={"calc(100dvh - 80px)"}
            overflow={"auto"}
          >
            <GenreList />
          </GridItem>
        </Show>

        <GridItem
          id="main-grid"
          area="main"
          fontWeight="bold"
          height={"calc(100dvh - 80px)"}
          overflow={"auto"}
          padding={2}
        >
          <GameHeading />

          <Flex gap={2}>
            <SortSelector />
            <PlatformSelector />
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default HomePage;
