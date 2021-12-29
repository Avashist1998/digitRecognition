import { METHODS } from "http";
import React, { useState } from "react";
import DrawingCanvas from "./DrawingCanvas";

const SubPlayPage = ({number_truth = "0"}) => {
    
    const url = "http://192.168.1.65:8000/predict"
    const [imageData, setImageData] = useState<Blob | null>(null)
    const [canvasURI, setCanvasURI] = useState("")  
    const [number_result, SetNumberResult] = useState(0);
    const [score_result, SetScoreResult] = useState(0.99);


    const getResults = () => {
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
        
        


    const submit = () => {
        
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        var image = canvas.toDataURL()
        // setImageData(image)
        canvas.toBlob(function(blob){
            if (blob != null) {
                setImageData(blob)
                getResults()
            }
            
         })

    }
    
    const undo = () => {
        console.log("clear the screen")
        var canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        var context = canvas.getContext('2d') as CanvasRenderingContext2D;
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Need to hide the Set Number and Score
        SetNumberResult(0)
        SetScoreResult(0.99)
    }


    return (
        <div className="container"> 
            <div className="text-center">
                <h2> Try to make a {number_truth}</h2>
            </div>
            <div className="text-center" >
                <DrawingCanvas setImageURI={setCanvasURI}/>
                {/* <img className="signature-thumbnail" width="250px" 
                src ={canvasURI} 
                alt="Signature thumbnail"></img> */}

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