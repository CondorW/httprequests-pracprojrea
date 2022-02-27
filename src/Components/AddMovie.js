import { useState } from "react";

export default function AddMovie() {
  const [titleState, setTitleState] = useState();
  const [opentextState, setOpentextState] = useState();
  const [releaseState, setReleaseState] = useState();

  function titleInputHandler(event) {
    setTitleState(event.target.value);
  }
  function opentextInputHandler(event) {
    setOpentextState(event.target.value);
  }
  function releaseInputHandler(event) {
    setReleaseState(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const submittedMovie = {
      title: titleState,
      openingText: opentextState,
      releaseDate: releaseState,
    };
    fetch(process.env.REACT_APP_DBLINKMOVIES, {
      method: "POST",
      body: JSON.stringify(submittedMovie),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="bg-lime-200 w-3/4 rounded flex items-center justify-center flex-col mt-4 py-4">
      <h1>Submit your own Films</h1>
      <div>
        <form onSubmit={submitHandler} action="">
          <input
            onChange={titleInputHandler}
            className="mx-4 rounded px-1"
            type="text"
            placeholder="Filmname"
          />
          <input
            onChange={opentextInputHandler}
            className="mx-4 rounded px-1"
            type="text"
            placeholder="Opening Text"
          />
          <input
            onChange={releaseInputHandler}
            className="mx-4 rounded px-1"
            type="date"
            placeholder="Release Date"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
