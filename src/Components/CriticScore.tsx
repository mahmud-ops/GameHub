import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
    const color = score > 90 ? 'green' : score > 80 ? 'yellow' : 'orange';
  return <Badge colorScheme={color} fontSize={'15px'} borderRadius={'5px'} paddingX={2}>{score}</Badge>;
};

export default CriticScore;
