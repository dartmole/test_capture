import React, { useState } from "react";
// Import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route path="/work/:movieUrl" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
