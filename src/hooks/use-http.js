import { useState, useCallback } from "react";

function useHttp(postRequest,databaseUrl) {
  const [filmDataState, setFilmDataState] = useState();
  const [loadingState, setLoadingState] = useState();
  const [errorState, setErrorState] = useState(false);

  const filmsHandler = useCallback(async (submitData) => {
    if (postRequest === false) {
      setLoadingState(true);
      try {
        const response = await fetch(databaseUrl, {
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
    }
    else if (postRequest === true){
        fetch(databaseUrl, {
            method: "POST",
            body: JSON.stringify(submitData),
            headers: { "Content-Type": "application/json" },
          });
    }
  }, [postRequest]);
  return [filmDataState, loadingState, errorState, filmsHandler];
}
export default useHttp;
