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
  useDisclosure,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bgColor={"blackAlpha.100"}>
          <NavBar onOpenDrawer={onOpen} />
        </GridItem>

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
          <GameGrid/>
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

export default App;
