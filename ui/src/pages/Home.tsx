import React, {useState} from 'react';
import PlayPopUp from '../components/PlayPopUp';
import About from "../components/About";
import './App.css';


function Home() {
  const [showPlayPopUp, setShowPlayPopUp] = useState(false);
  const [numberTruth, setNumberTruth] = useState('0');

  const openPlayPopUp = () => {
      setShowPlayPopUp(true)
      document.documentElement.style.setProperty('--home-page-visibility', '0.5')
    }
  const closePopUp = () => {
      setShowPlayPopUp(false)
      document.documentElement.style.setProperty('--home-page-visibility', '1.0')
  }


    return (
      <div className="Home">
        <div className="home-page-content">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-2" height="400" width="400"
                  src="https://cdn.rawgit.com/hardmaru/cppn-gan-vae-tensorflow/master/examples/output_sinusoid.gif"
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">AI Powered Digit Master</h1>
                <h4> Learn to write beautiful numbers using Digit Master
                </h4>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <button className='play-btn' onClick={openPlayPopUp}>Play</button>
          </div>
          <div className='container'>
            <About/>
          </div>
        </div>
        <div className="home-play-popup">
          <div className="text-center">
            <PlayPopUp trigger={showPlayPopUp}>
              <div>
                <button className="play-popup-close-btn" onClick={closePopUp}>close</button>
              </div>
            </PlayPopUp>
          </div>
        </div>
      </div>

    );
  }
  
export default Home;