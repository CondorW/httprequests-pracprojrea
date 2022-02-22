import { useState } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [filmDataState, setFilmDataState] = useState();

  const getFilmsHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => setFilmDataState(data));
  };
  console.log(filmDataState);

  return (
    <div className="bg-lime-200 w-1/3 h-1/3 flex items-center justify-center flex-col">
      {filmDataState !== undefined
        ? filmDataState.results.map((film, index) => {
            return <FilmCard key={index} title={film.title}></FilmCard>;
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
