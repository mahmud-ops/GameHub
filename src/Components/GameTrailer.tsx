import useTrailer from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading || error) return null;

  const trailer = data?.results?.[0];
  if (!trailer) return null;

  const videoUrl = trailer.data?.[480];

  if (!videoUrl) return null;

  return <video src={videoUrl} controls poster={trailer.preview} />;
};

export default GameTrailer;
