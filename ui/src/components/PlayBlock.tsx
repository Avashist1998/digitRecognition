import { useEffect, useState } from 'react';

import predict from "../api/GetPredict";
import DrawingCanvas from "./DrawingCanvas";
import ConditionalRender from './ConditionalRender';


interface Props {
    val: string,
    hasNext: boolean,
    playNextCard: (id: number) => void,
    activateNextCard: (id: number) => void,
    setCardCompleted: (id: number) => void
}


const PlayBlock = ({val, hasNext, playNextCard, activateNextCard, setCardCompleted}: Props) => {
    const [_, setCanvasURI] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [numberResult, setNumberResult] = useState(10);
    const [scoreResult, setScoreResult] = useState(0.99);


    useEffect(() => {
        console.log("val", val, "numberResult", numberResult, "scoreResult", scoreResult)
        if (val  === numberResult.toString()) {
            activateNextCard(numberResult)
            setCardCompleted(Number(val));
            setShowNext(true);
            if (scoreResult > 0.1) {
                setResultMessage("You got a perfect score, Congratulations!")
            }
            setResultMessage("You got it right, Nice Job!");

            if (val === "9") {
                setResultMessage("Congratulations! You have completed the game!")
            }
        } else {
            setResultMessage("Try again");
        }
    }, [numberResult])

    function displayResults() {
        setShowResult(true)
        document.documentElement.style.setProperty('--play-popup-visibility', '0.5')
    }

    const submit  = async () => {
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (ctx !== null) {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            var normalArray = Array.prototype.slice.call(imageData);
            // console.log("data", normalArray, "length", normalArray.length, "width", canvas.width, "height", canvas.height)
            predict(normalArray, canvas.width, canvas.height).then(results => {
                setScoreResult(results.score);
                setNumberResult(results.classification);
                displayResults();
            })
        }
    }

    const undo = () => {
        // console.log("clear the screen")
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        var context = canvas.getContext('2d') as CanvasRenderingContext2D;
        context.clearRect(0, 0, canvas.width, canvas.height);
        var width = canvas.width;
        canvas.width = 1;
        canvas.width = width
        setShowResult(false)
        setNumberResult(10)
        setScoreResult(0.99)
    }


    const hideResults = () => {
        setShowResult(false)
        document.documentElement.style.setProperty('--play-popup-visibility', '1')
        undo();
    }

    return (
        <div className="container">
            <div className="play-popup-content">
                <div className="main-container">
                    <div className="text-center p-2 font-bold">
                        <h1 className="text-4xl">Try to make a {val}</h1>
                    </div>
                    <div className="p-2 justify-center flex align-items: center;">
                        <DrawingCanvas setImageURI={setCanvasURI} />
                    </div>
                    <div className="flex justify-between px-20">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submit}>
                        Submit
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={undo}>
                        Clear
                    </button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <ConditionalRender condition ={showResult}>
                    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center" >
                        <div className="relative p-8 w-100 max-w-[640px] rounded bg-background border-black border-solid border-4"> 
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-4 rounded absolute top-2 right-2" onClick={hideResults}>close</button>
                            <h1 className="text-2xl mt-5">{resultMessage}</h1>
                            <div className="row content-center flex justify-center mt-5">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold m-2 rounded p-2"  onClick={hideResults}>Try Again</button>
                                {showNext && hasNext ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 px-4 py-2 rounded m-2" onClick={() => {
                                    document.documentElement.style.setProperty('--play-popup-visibility', '1')
                                    setShowResult(false)
                                    undo();
                                    playNextCard(Number(val))
                                }}>Next</button> : null}
                            </div>
                        </div>
                    </div>
                </ConditionalRender>
            </div>
        </div>
    )
};

export default PlayBlock;