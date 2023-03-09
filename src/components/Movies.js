import MovieTile from "./MovieTile";
import Sort from "./Sort";

const movies = require("../data/movies.json");

const movieStyle = {
  background: "white",
  margin: "10px 0",
  padding: "10px",
};

const MoviesList = () => {
  const sortItems = (order) => {
    console.log("Order by", order);
    //return; //data
  };

  return (
    <div>
      <Sort updateOrder={sortItems} />
      {movies.map((movie) => {
        return <MovieTile movie={movie} styles={movieStyle} />;
      })}
    </div>
  );
};

export default MoviesList;
