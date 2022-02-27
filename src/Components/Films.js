import { useState, useEffect, useCallback } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [filmDataState, setFilmDataState] = useState();
  const [loadingState, setLoadingState] = useState();
  const [errorState, setErrorState] = useState(false);

  const getFilmsHandler = useCallback(async () => {
    setLoadingState(true);
    try {
      const response = await fetch(
        process.env.REACT_APP_DBLINKMOVIES,
        { method: "GET", headers: { "Content-Type": "application/json" }, }
      );
      const data = await response.json();
      console.log(data);

      let filmArray = [];
      for(const key in data){
        filmArray.push({
          key: key,
          title: data[key].title,
          crawl: data[key].openingText
        })
      }
      console.log(filmArray);
      setFilmDataState(filmArray);
      setLoadingState(false);
    } catch (error) {
      setErrorState(error.message);
    }
  }, []);

  useEffect(() => {
    getFilmsHandler();
  }, [getFilmsHandler]);

  var toBeRendered = <p>Sorry we have no data - try fetching some movies</p>;
  if (errorState === false && filmDataState !== undefined) {
    toBeRendered = filmDataState.map((film) => {
      return (
        <FilmCard
          key={film.key}
          title={film.title}
          crawl={film.crawl}
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
