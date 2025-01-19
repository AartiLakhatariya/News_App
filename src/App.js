import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Search from "./components/Search/Search";
import { router } from "./config/config";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
