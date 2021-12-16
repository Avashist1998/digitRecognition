import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PlayPage from "./pages/PlayPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
