import Navbar from "./Components/Navbar";
import { Fragment } from "react";
import Films from "./Components/Films";

function App() {
  return (
    <Fragment>
        <Navbar></Navbar>
        <div className="flex min-h-screen bg-black justify-center">
          <Films></Films>
        </div>
    </Fragment>
  );
}

export default App;
