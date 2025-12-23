import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      {data?.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;
