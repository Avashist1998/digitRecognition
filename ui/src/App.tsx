import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PlayPage from "./pages/PlayPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/" element={<HomePage />} />
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
