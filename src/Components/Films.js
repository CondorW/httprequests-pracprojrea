import { useState } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [filmDataState, setFilmDataState] = useState();

  async function getFilmsHandler() {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    setFilmDataState(data);
  };
  console.log(filmDataState);

  return (
    <div className="bg-lime-200 w-3/4 rounded flex items-center justify-center flex-col mt-4">
      {filmDataState !== undefined
        ? filmDataState.results.map((film, index) => {
            return <FilmCard key={index} title={film.title} crawl={film.opening_crawl}></FilmCard>;
          })
        : null}
      <FilmCard></FilmCard>
      <button onClick={getFilmsHandler} className="block bg-lime-400">
        Give me those sweet Film Suggestions
      </button>
    </div>
  );
};
export default Films;
