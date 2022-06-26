import React, { ReactNode} from "react"
import "./ScorePopUp.css"

interface simpleProps {
    trigger: boolean,
    children: ReactNode
}


const ScorePopUp  = (props: simpleProps) => {

    return(props.trigger ? (
            <div className="popup">
                <div className="popup-inner">
                    {props.children}
                </div>
            </div> 
    ) : null
    )
}

export default ScorePopUp;