import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";

import Home from "./pages/Home"
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
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
