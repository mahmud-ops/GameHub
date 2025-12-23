import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImage from "../Services/cropped-image";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data?.map((g) => (
        <ListItem paddingY={2} key={g.id}>
          <HStack>
            <Image
              src={getCroppedImage(g.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            ></Image>
            <Text fontSize={15}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
