import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RandomPage from "./pages/RandomPage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/random" component={RandomPage} />
    </Router>
  );
}

export default App;
