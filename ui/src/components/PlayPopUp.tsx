import { ReactNode} from "react"
import PlayBlock from "./PlayBlock"

interface Props {
    number: string,
    hasNext: boolean,
    playNextCard: (id: number) => void,
    activateNextCard: (id: number) => void,
    setCardCompleted: (id: number) => void,
    children?: ReactNode
}

const PlayPopUp  = ({number, hasNext, playNextCard, activateNextCard, setCardCompleted, children}: Props) => {
    return( 
        <div className="items-center bg-background w-[100%] h-[75vh] flex justify-center">
            <div className="relative p-[32px] w-100 rounded-lg max-w-[740px] border-4 border-black">
            {children}
            <PlayBlock val={number} hasNext={hasNext} activateNextCard={activateNextCard} setCardCompleted={setCardCompleted} playNextCard={playNextCard}></PlayBlock>
            </div>
        </div> 

    )
}

export default PlayPopUp;
