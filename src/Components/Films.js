import { useState, useEffect, useCallback } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [filmDataState, setFilmDataState] = useState();
  const [loadingState, setLoadingState] = useState();
  const [errorState, setErrorState] = useState(false);

  const getFilmsHandler = useCallback(async () => {
    setLoadingState(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      setFilmDataState(data);
      setLoadingState(false);
    } catch (error) {
      setErrorState(error.message);
    }
  },[]);

  useEffect(() => {
    getFilmsHandler();
  }, [getFilmsHandler]);

  var toBeRendered = <p>Sorry we have no data - try fetching some movies</p>;
  if (errorState === false && filmDataState !== undefined) {
    toBeRendered = filmDataState.results.map((film, index) => {
      return (
        <FilmCard
          key={index}
          title={film.title}
          crawl={film.opening_crawl}
        ></FilmCard>
      );
    });
  }
  if (errorState === false && loadingState === true) {
    toBeRendered = <p>Please stay patient while we fetch data</p>;
  }
  if (errorState !== false) {
    toBeRendered = <p>A critical error occured</p>;
  }
  console.log(toBeRendered);
  return (
    <div className="bg-lime-200 w-3/4 rounded flex items-center justify-center flex-col mt-4">
      {toBeRendered}
      <button onClick={getFilmsHandler} className="block bg-lime-400">
        Give me those sweet Film Suggestions
      </button>
    </div>
  );
};
export default Films;
