import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import About from "../components/About";

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

  return (
    <div className="" ref={scrollRef}>
      <div className="h-screen flex items-center bg-light-background">
        <div className="row align-items-center py-5 px-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-2"
              height="400"
              width="400"
              src="https://cdn.rawgit.com/hardmaru/cppn-gan-vae-tensorflow/master/examples/output_sinusoid.gif"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="text-5xl font-bold">AI Powered Digit Master</h1>
            <h4>Learn to write beautiful numbers using Digit Master</h4>
          </div>
        </div>
      </div>

      <div className="bg-background h-screen flex items-center justify-center">
        <a className="no-underline hover:no-underline" href="/digitRecognition/#/play">
          <div className="hover:bg-sky-600 bg-sky-950 rounded-md">
            <h2 className="m-5 p-2 rounded text-5xl text-white flex justify-center pointer-events-none">
              Play
            </h2>
          </div>
        </a>
      </div>

      <div className="bg-dark-background items-center flex justify-center h-screen">
        <About />
      </div>
    </div>
  );
};

export default HomePage;
