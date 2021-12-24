import React, 
    {
        useRef, useLayoutEffect, MouseEvent,
        Dispatch, SetStateAction 
    } from 'react';
// import './PlayPage.css'

//make interface for passing props
interface IProps {
  setImageURI?: Dispatch<SetStateAction<string>>;
}


const DrawingCanvas:React.FC<IProps> = ({setImageURI}) => { 
    const refCanvas = useRef<HTMLCanvasElement>(null) 
    var contextRefCanvas:any = null
    var boundCanvas:DOMRect
    var isPainting:boolean = false

    useLayoutEffect(() => {
        console.log(refCanvas); // { current: <h1_object> }
        contextRefCanvas = refCanvas.current!.getContext('2d');
        boundCanvas = refCanvas.current!.getBoundingClientRect()
    })

    const startPosition = (e:MouseEvent<HTMLCanvasElement>) =>{
        isPainting = true
        // console.log(refCanvas.current?.getBoundingClientRect())
        // console.log({X:e.pageX, Y:e.pageY})
        // console.log({X:e.clientX, Y:e.clientY})
        draw(e) // this for event of 1 dot only
    }
    const stopPosition = () =>{
        isPainting = false
        contextRefCanvas!.beginPath()
        setImageURI!(refCanvas.current!.toDataURL())
        // console.log(refCanvas.current!.toDataURL())
        // console.log("toDataURL:",contextRefCanvas!.toDataURL())
    }


    const draw = (e:MouseEvent<HTMLCanvasElement>)=> {
        if (!isPainting) return;
        let offsetX = boundCanvas!.x
        let offsetY = boundCanvas!.y
        contextRefCanvas!.lineWidth = 25
        contextRefCanvas!.lineCap   = "round"
        contextRefCanvas!.lineTo(e.pageX - offsetX, e.pageY - offsetY) //
        contextRefCanvas!.stroke() // this will draw the line
    }
    
    return (
            <canvas id="myCanvas" 
            ref={refCanvas}
            onMouseUp={stopPosition}
            onMouseDown={startPosition}
            onMouseMove={draw}
            width="500px" height="500px"></canvas>
    )
};

export default DrawingCanvas;

//https://github.com/rleija703/react-examples/blob/master/useref-with-typescript/src/App.tsx
//https://linguinecode.com/post/how-to-use-react-useref-with-typescript