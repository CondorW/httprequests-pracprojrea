import { useState, useCallback } from "react";

function useHttp(postRequest) {
  const [filmDataState, setFilmDataState] = useState();
  const [loadingState, setLoadingState] = useState();
  const [errorState, setErrorState] = useState(false);

  const getFilmsHandler = useCallback(async () => {
    setLoadingState(true);
    try {
      const response = await fetch(process.env.REACT_APP_DBLINKMOVIES, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);

      let filmArray = [];
      for (const key in data) {
        filmArray.push({
          key: key,
          title: data[key].title,
          crawl: data[key].openingText,
        });
      }
      console.log(filmArray);
      setFilmDataState(filmArray);
      setLoadingState(false);
    } catch (error) {
      setErrorState(error.message);
    }
  }, []);
  return [filmDataState, loadingState, errorState, getFilmsHandler];
}
export default useHttp;
