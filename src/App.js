import Navbar from "./Components/Navbar";
import { Fragment } from "react";
import Films from "./Components/Films";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <Fragment>
        <Navbar></Navbar>
        <div className="flex min-h-screen bg-gray-800 justify-center flex-col items-center">
          <AddMovie></AddMovie>
          <Films></Films>
        </div>
    </Fragment>
  );
}

export default App;
