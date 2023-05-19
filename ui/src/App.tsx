// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PlayPage from "./pages/PlayPage"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/digitRecognition/" element={<HomePage/>} />
        <Route path="/digitRecognition/play" element={<PlayPage/>} />
        <Route
          path="/digitRecognition/*"
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
