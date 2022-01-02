import React from 'react';
import './App.css';


function Home() {
    return (
      <div className="Home">
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
      </div>
    );
  }
  
export default Home;