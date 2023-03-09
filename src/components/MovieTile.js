import ListItems from "../components/ListItems";

const MovieTile = ({ movie, styles }) => {
  return (
    <div style={styles}>
      <div>Title: {movie.Title}</div>
      <div>Summary: {movie.Plot}</div>
      <div>Rating: {movie.imdbRating}</div>
      <div>Director: {movie.Director}</div>
      <div>Released: {movie.Released}</div>
      <div>
        Actors:{" "}
        <ul>
          {movie.Actors.split(", ").map((actor) => {
            return <li>{actor}</li>;
          })}
        </ul>
      </div>
      <div>
        Genres: <ListItems data={movie.Genre} />
      </div>
      <br></br>
      <div>
        Country: <ListItems data={movie.Country} />
      </div>
    </div>
  );
};

export default MovieTile;
