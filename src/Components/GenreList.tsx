import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedImage from "../Services/cropped-image";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <List>
      {isLoading && skeletons.map(() => (
        <HStack>
        <Skeleton marginY={2} boxSize={"50px"} />
        <SkeletonText width={20} noOfLines={2}/>
        </HStack>
      ))}

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
