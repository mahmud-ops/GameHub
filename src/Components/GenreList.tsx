import useGenres from "../Hooks/useGenres"

const GenreList = () => {
  
  const {genres} = useGenres();

    return (
        <ol>
            {
                genres?.map(g => <li key={g.id}>{g.name}</li>)
            }
        </ol>
  )
}

export default GenreList