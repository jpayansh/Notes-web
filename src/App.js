import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spage from "./Spage";
import SelectField from "./SelectContext";
import Epage from "./Epage";
function App() {
  return (
    <Router>
      <SelectField>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
              </>
            }
          />
          <Route
            path="/s"
            element={
              <>
                <Navbar />
                <Spage />
              </>
            }
          />
          <Route
            path="/e"
            element={
              <>
                <Navbar />
                <Epage />
              </>
            }
          />
        </Routes>
      </SelectField>
    </Router>
  );
}

export default App;
