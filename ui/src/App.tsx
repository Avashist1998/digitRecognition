import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Play from "./pages/Play"
import NavBar from './components/navbar';
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path= "/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
