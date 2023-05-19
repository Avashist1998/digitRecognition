// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Play from "./pages/Play"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/play" element={<Play/>} />
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
    </BrowserRouter>
  );
}
export default App;
