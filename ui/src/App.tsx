// import React from 'react';
import {Routes, Route, HashRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PlayPage from "./pages/PlayPage"
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/play" element={<PlayPage/>} />
        <Route
          path="/*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}
export default App;