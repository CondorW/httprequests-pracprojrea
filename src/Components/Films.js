import { useState } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [filmDataState, setFilmDataState] = useState();
  const [loadingState, setLoadingState] = useState();

  async function getFilmsHandler() {
    setLoadingState(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    setFilmDataState(data);
    setLoadingState(false);
  }
  console.log(filmDataState);

  return (
    <div className="bg-lime-200 w-3/4 rounded flex items-center justify-center flex-col mt-4">
      {loadingState && <p>Please Stay Patient - data is loading</p>}
      {loadingState === false && filmDataState !== undefined ? (
        filmDataState.results.map((film, index) => {
          return (
            <FilmCard
              key={index}
              title={film.title}
              crawl={film.opening_crawl}
            ></FilmCard>
          );
        })
      ) : (
        <p>Sorry we have no data - try fetching some movies</p>
      )}
      <button onClick={getFilmsHandler} className="block bg-lime-400">
        Give me those sweet Film Suggestions
      </button>
    </div>
  );
};
export default Films;
