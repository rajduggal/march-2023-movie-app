import MovieTile from "./MovieTile";

const movies = require("../data/movies.json");

const movieStyle = {
  background: "white",
  margin: "10px 0",
  padding: "10px",
};

const MoviesList = () => {
  return (
    <div>
      {movies.map((movie) => {
        return <MovieTile movie={movie} styles={movieStyle} />;
      })}
    </div>
  );
};

export default MoviesList;
