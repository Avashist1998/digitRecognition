import React, { ReactNode, useState} from "react"
import DrawingCanvas from "./DrawingCanvas";
import ScoreMessage from "./ScoreMessage";
import ScorePopUp from "./ScorePopUp";
import './PlayPopUp.css'

interface simpleProps {
    trigger: boolean,
    children: ReactNode
}

const PlayPopUp  = (props: simpleProps) => {
    const [numberTruth, setNumberTruth] = useState('0')
    return(props.trigger ? (
            <div className="play-popup">
                <div className="play-popup-inner">
                    {props.children}
                    <input id="truthNumberInput" type="text" pattern="[0-9]" value={numberTruth} onInput={event => setNumberTruth((event.target as HTMLInputElement).value)} />
                    <PlayBlock number_truth={numberTruth}></PlayBlock>
                </div>
            </div> 
    ) : null
    )
}

export default PlayPopUp;

const PlayBlock = ({number_truth = "0"}) => {
    // const history = useNavigate();
    const url = process.env.REACT_APP_SERVER_URL+"/predict"
    console.log("test url:",process.env.REACT_APP_SERVER_URL)
    // console.log("process.env",process.env)
    const [canvasURI, setCanvasURI] = useState("")  
    const [showResult, setShowResult] = useState(false);
    const [numberResult, setNumberResult] = useState(0);
    const [scoreResult, setScoreResult] = useState(0.99);


    function displayResults() {
        setShowResult(true)
        document.documentElement.style.setProperty('--play-popup-visibility', '0.5')
    }
    const getResults = (imageData:Blob) => {
        if (imageData != null){
            const fd = new FormData()
            fd.append('file', imageData, "file.png")
            fetch(url, {
                method: "POST",
                body: fd }).then(Response => { 
                    Response.json().then(Json => {
                        console.log(Json.data);
                        setNumberResult(Json.data.classification)
                        setScoreResult(Json.data.score)
                        displayResults()
                    });
                })
                .catch(err => console.error(err))
        }
    }


    const submit = () => {
        
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        canvas.toBlob(function(blob){
            if (blob != null) {
                getResults(blob)  
            }
         })
        
    }
    
    const undo = () => {
        console.log("clear the screen")
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        var context = canvas.getContext('2d') as CanvasRenderingContext2D;
        context.clearRect(0, 0, canvas.width, canvas.height);
        var width = canvas.width;
        canvas.width = 1;
        canvas.width = width
        setShowResult(false)
        setNumberResult(0)
        setScoreResult(0.99)
    }


    const hideResults = () => {
        setShowResult(false)
        document.documentElement.style.setProperty('--play-popup-visibility', '1')
    }

    return (
        <div className="container">
            <div className="play-popup-content">
                <div className="main-container">
                    <div className="text-center">
                        <h2> Try to make a {number_truth}</h2>
                    </div>
                    <div className="text-center">
                        <DrawingCanvas setImageURI={setCanvasURI} />
                    </div>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 offset-md-4 offset-lg-4">
                                <button className="btn btn-success" onClick={submit}>Submit</button>
                            </div>
                            <div className="col-md-2 col-lg-2">
                                <button className="btn btn-danger" onClick={undo}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <ScorePopUp trigger={showResult}>
                    <div>
                        <button className="close-btn" onClick={hideResults}>close</button>
                        <ScoreMessage number_truth= {number_truth} number_result={numberResult} score={scoreResult}/>
                    </div> 
                </ScorePopUp>
                
            </div>
        </div>
    )
};



