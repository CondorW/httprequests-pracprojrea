import { useEffect } from "react";
import FilmCard from "./FilmCard";
import useHttp from "../hooks/use-http";

const Films = () => {
  const [filmDataState, loadingState, errorState, filmsHandler] = useHttp(false);

  useEffect(() => {
    filmsHandler();
  }, [filmsHandler]);

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
      <button onClick={filmsHandler} className="block bg-lime-400">
        Give me those sweet Film Suggestions
      </button>
    </div>
  );
};
export default Films;
