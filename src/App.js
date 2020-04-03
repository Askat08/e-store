import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
// Using Bootstrap 4
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <h3>hello peadr from app</h3>
    </React.Fragment>
  );
}

export default App;
