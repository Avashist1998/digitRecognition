import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import type { NumberCardData } from "../types/NumberCardData";
import "./Grid.css";
import PlayPopUp from "./PlayPopUp";
import ConditionalRender from "./ConditionalRender";

// useEffect(() => {
//   console.log("showPopUpArray", showPopUpArray)
// }, [showPopUpArray]);

interface Props {
  cards: NumberCardData[];
}

const Grid = ({ cards }: Props) => {
  const initialActiveCards: boolean[] = [];
  const initializeCompletedCards: boolean[] = [];
  cards.forEach((card) => {
    initialActiveCards.push(card.id === 0);
    initializeCompletedCards.push(false);
  });

  const cardRef = useRef(null);
  const [activeCards, setActiveCards] = useState<boolean[]>(initialActiveCards);
  const [showPopUpArray, setShowPopUpArray] =
    useState<boolean[]>(initialActiveCards);
  const [cardCompletedArray, setCardCompletedArray] = useState<boolean[]>(
    initializeCompletedCards
  );

  const getDivCardClassName = (card: NumberCardData) => {
    let divCardClassName = "flex-shrink-0 p-4 rounded shadow-md w-full ";
    if (activeCards[card.id]) {

      if (showPopUpArray[card.id]) {
        return divCardClassName + " hover:bg-gray-200 bg-blue-400 transition-colors duration-300";
      }
      return (
        divCardClassName +
        "hover:bg-gray-200 bg-slate-50 transition-colors duration-300"
      );
    }
    return divCardClassName + "bg-gray-300";
  };

  const getDotClassName = (card: NumberCardData) => {
    var dotClassName =
      "w-2 h-2 rounded-full my-2 last:my-0 p-2 m-5 transition-colors duration-300 ";
    if (activeCards[card.id]) {
      if (cardCompletedArray[card.id]) {
        return dotClassName + "bg-green-500";
      }
      return dotClassName + "bg-yellow-500";
    }
    return dotClassName + "bg-gray-300";
  };

  const activateNextCard = (id: number) => {
    var newActive = activeCards.map((value, index) => {
      if (index === id + 1) {
        return true;
      } else {
        return value;
      }
    });
    setActiveCards(newActive);
  };

  const setShowPopUp = (id: number, state: boolean) => {
    console.log("what was passed is", state);
    var newShowPopUpArray = showPopUpArray.map((_, index) => {
      if (index === id) {
        return state;
      } else {
        return false;
      }
    });
    setShowPopUpArray([...newShowPopUpArray]);
  };

  const setCardCompleted = (id: number) => {
    var newCardCompleted = cardCompletedArray.map((value, index) => {
      if (index === id) {
        return true;
      } else {
        return value;
      }
    });
    setCardCompletedArray(newCardCompleted);
  };

  const nextCard = (id: number) => {
    console.log("next card is triggered", id);
    setShowPopUp(id, false);
    setShowPopUp(id + 1, true);
    if (cardRef.current) {
      const nextCard = cardRef.current.nextElementSibling;
      if (nextCard) {
        nextCard.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const prevCard = (id: number) => {
    console.log("prev card is triggered", id);
    setShowPopUp(id, false);
    setShowPopUp(id - 1, true);
    const prevCard = cardRef.current.previousElementSibling;
    if (prevCard) {
      prevCard.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-4 p-4">
        {cards.map((card) => (
          <div
            className="w-64"
            ref={card.id === 0 ? cardRef : null}
            key={card.id}
          >
            <div
              className={getDivCardClassName(card)}
              key={card.id}
              onClick={() => {
                console.log("I was triggered", true && activeCards[card.id]);
                setShowPopUp(card.id, true && activeCards[card.id]);
              }}
            >
              <Card key={card.id} card={card} />
            </div>
            <div key={card.id} className={getDotClassName(card)}></div>
            <div>
              <ConditionalRender condition={showPopUpArray[card.id]}>
                <PlayPopUp
                  number={card.id.toString()}
                  hasNext={card.id < showPopUpArray.length - 1}
                  activateNextCard={activateNextCard}
                  setCardCompleted={setCardCompleted}
                  playNextCard={nextCard}
                >
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 px-4 rounded absolute top-2 right-2"
                    onClick={() => {
                      setShowPopUp(card.id, false);
                    }}
                  >
                    close
                  </button>
                  <ConditionalRender condition={card.id > 0}>
                    <button
                      className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-blue-400 text-white rounded px-3 py-1 text-2xl"
                      onClick={() => {
                        prevCard(card.id);
                      }}
                    >
                      &lt;
                    </button>
                  </ConditionalRender>
                  <ConditionalRender
                    condition={
                      card.id < showPopUpArray.length - 1 &&
                      activeCards[card.id + 1]
                    }
                  >
                    <button
                      className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-blue-400 text-white rounded px-3 py-1 text-2xl"
                      onClick={() => {
                        nextCard(card.id);
                      }}
                    >
                      &gt;
                    </button>
                  </ConditionalRender>
                </PlayPopUp>
              </ConditionalRender>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
