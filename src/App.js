import Navbar from "./Components/Navbar";
import { Fragment } from "react";
import Films from "./Components/Films";

function App() {
  return (
    <Fragment>
        <Navbar></Navbar>
        <div className="flex h-screen bg-slate-100 justify-center items-center">
        <Films></Films>
        </div>
    </Fragment>
  );
}

export default App;
