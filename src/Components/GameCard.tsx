import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { type Game } from "../Hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImage from "../Services/cropped-image";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIcon
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />

            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
