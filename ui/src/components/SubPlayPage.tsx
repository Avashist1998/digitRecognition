import { METHODS } from "http";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import DrawingCanvas from "./DrawingCanvas";

const SubPlayPage = ({number_truth = "0"}) => {
    // const history = useNavigate();
    const url = "http://192.168.1.65:8000/predict"
    const [canvasURI, setCanvasURI] = useState("")
    const [number_result, SetNumberResult] = useState(0);
    const [score_result, SetScoreResult] = useState(0.99);


    const getResults = (imageData:Blob) => {
        if (imageData != null){
            const fd = new FormData()
            fd.append('file', imageData, "file.png")
            fetch(url, {
                method: "POST",
                body: fd }).then(Response => { 
                    Response.json().then(Json => {
                        console.log(Json.data);
                        SetNumberResult(Json.data.classification)
                        SetScoreResult(Json.data.score)
                    });
                })
                .catch(err => console.error(err))
        }
    }

    function hasPrev(){
        if (number_truth !== '0'){
            return <button id="prevButton" className="btn btn-success" onClick={() => { window.location.href = (parseInt(number_truth)-1).toString()} }>Prev</button>
        }   
    }
    
    function hasNext(){
        if (number_truth !== "9"){
            return <button id="nextButton" className="btn btn-success" onClick={() => { window.location.href = (parseInt(number_truth)+1).toString()} }>Next</button>
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

        SetNumberResult(0)
        SetScoreResult(0.99)
    }
    return (
        <div className="container"> 
            <div className="text-center">
                <h2> Try to make a {number_truth}</h2>
            </div>
            <div className="text-center row" >
                <div className="col-md-2">
                    {hasPrev()}
                    
                </div>
                <div className="col-md-8 side-col">
                    <DrawingCanvas setImageURI={setCanvasURI}/>
                    {/* <img className="signature-thumbnail" width="250px" 
                    src ={canvasURI} 
                    alt="Signature thumbnail"></img> */}
                </div>
                <div className="col-md-2 side-col">
                    {hasNext()}
                </div>
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
            
                <h4>Your number is : {number_result}</h4>
                <h4>The score given by model {score_result}</h4>

            </div>
            
        </div>
        

    )
};

export default SubPlayPage;