import { ReactNode} from "react"
import PlayBlock from "./PlayBlock"
import './PlayPopUp.css'

interface Props {
    number: string,
    hasNext: boolean,
    playNextCard: (id: number) => void,
    activateNextCard: (id: number) => void,
    setCardCompleted: (id: number) => void,
    children?: ReactNode
}

/*
.play-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    h-[100vh]
}
*/
// const PlayPopUp  = ({number, hasNext, playNextCard, activateNextCard, setCardCompleted, children}: Props) => {
//     return( 
//         <div className="items-center bg-background w-[100%] h-[100vh] flex justify-center top-0 left-0 fixed">
//         {/* <div className="play-popup-inner"> */}
//             <div className="bg-background"> 
//                 {children}
//                 <PlayBlock val={number} hasNext={hasNext} activateNextCard={activateNextCard} setCardCompleted={setCardCompleted} playNextCard={playNextCard}></PlayBlock>
//             </div> 
//         </div>
//         // </div>
//     )
// }


const PlayPopUp  = ({number, hasNext, playNextCard, activateNextCard, setCardCompleted, children}: Props) => {
    return(
        <div className="play-popup">
            <div className="play-popup-inner"> 
                    {children}
                    <PlayBlock val={number} hasNext={hasNext} activateNextCard={activateNextCard} setCardCompleted={setCardCompleted} playNextCard={playNextCard}></PlayBlock>
            </div> 
        </div>
    ) 
};

export default PlayPopUp;
