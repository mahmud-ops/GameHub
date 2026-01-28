import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import type { Game } from "../Entities/Game";

interface Props {
    game: Game;
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((g) => (
          <Text>{g.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((pub) => (
          <Text>{pub.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
