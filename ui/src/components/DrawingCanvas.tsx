import React, 
    {
        useRef, useLayoutEffect, MouseEvent,
        Dispatch, SetStateAction 
    } from 'react';
import './DrawingCanvas.css'

interface IProps {
  setImageURI?: Dispatch<SetStateAction<string>>;
}

const DrawingCanvas:React.FC<IProps> = ({setImageURI}) => { 
    const refCanvas = useRef<HTMLCanvasElement>(null) 
    var contextRefCanvas:any = null
    var boundCanvas:DOMRect
    var isPainting:boolean = false

    useLayoutEffect(() => {
        // console.log(refCanvas); // { current: <h1_object> }
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
    }

    const draw = (e:MouseEvent<HTMLCanvasElement>)=> {
        if (!isPainting) return;
        let offsetX = boundCanvas!.x
        let offsetY = boundCanvas!.y
        // console.log({x_offset:offsetX, Y_offset:offsetY})
        // console.log({X:e.clientX, Y:e.clientY})
        contextRefCanvas!.lineWidth = 50
        contextRefCanvas!.lineCap = "round"
        contextRefCanvas!.lineJoin = "round";
        // contextRefCanvas!.lineTo(e.pageX, e.pageY)
        contextRefCanvas!.lineTo(e.pageX - offsetX, e.pageY - offsetY) //
        contextRefCanvas!.stroke() // this will draw the line
    }
    
    return (
            <canvas 
            id="myCanvas"
            // className="border-black border-[2px] border-solid"
            ref={refCanvas}
            onMouseUp={stopPosition}
            onMouseDown={startPosition}
            onMouseMove={draw}
            width="500px" height="500px"></canvas>
    )
};

export default DrawingCanvas;
