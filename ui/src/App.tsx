import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Play from "./pages/Play"
import NavBar from './components/navbar';
import About from "./pages/About"
import SubPlayPage from './components/SubPlayPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />        
        <Route path= "/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/0" element={<SubPlayPage number_truth='0'/> }/>
        <Route path="/play/1" element={<SubPlayPage number_truth='1'/> }/>
        <Route path="/play/2" element={<SubPlayPage number_truth='2'/> }/>
        <Route path="/play/3" element={<SubPlayPage number_truth='3'/> }/>
        <Route path="/play/4" element={<SubPlayPage number_truth='4'/> }/>
        <Route path="/play/5" element={<SubPlayPage number_truth='5'/> }/>
        <Route path="/play/6" element={<SubPlayPage number_truth='6'/> }/>
        <Route path="/play/7" element={<SubPlayPage number_truth='7'/> }/>
        <Route path="/play/8" element={<SubPlayPage number_truth='8'/> }/>
        <Route path="/play/9" element={<SubPlayPage number_truth='9'/> }/>

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
