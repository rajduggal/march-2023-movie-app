import { useEffect } from "react";
import MovieTile from "./MovieTile";
import { json, useLoaderData, useParams } from "react-router-dom";

// const movies = require("../data/movies.json");

const movieStyle = {
  background: "white",
  margin: "10px 0",
  padding: "10px",
};

const MoviesList = () => {
  const movies = useLoaderData();
  // This we can do using ErrorElement also
  // if(movies.isError) {

  // }

  // We can use UseRouteError to get the error in any route and show it on UI
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieTile key={movie.imdbID} movie={movie} styles={movieStyle} />
        );
      })}
    </div>
  );
};

export default MoviesList;

//here in this loader function we can add params also to fetch the params and show that particular data/route
export function loader() {
  //API call code will be implemnted here
  const movies = require("../data/movies.json");
 // console.log("Movies Data"+ JSON.stringify(movies));
  return movies;
}

// export async function loader() {
//   const response = await fetch("...");
//   if(!response.ok) {
//        return {isError: true, message: "could not fetch movies"}
//        return json(
//           {message: ''},
//           {status: ''}
//        ); It will create the json object
//   } else {
//     return response;
//   }
//  // console.log("Movies Data"+ JSON.stringify(movies));
// }
