import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RandomPage from "./pages/RandomPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Homepage} />
      <Route path="/random" component={RandomPage} />
    </Router>
  );
}

export default App;
