import { SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../Hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  const imageLinks = data?.results;

  if(isLoading || error) return null;
  if(!imageLinks) return null;

  return (
    <SimpleGrid
      columns={2}
      spacing={2}
    >
      {imageLinks.map((i) => (
        <img src={i.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
