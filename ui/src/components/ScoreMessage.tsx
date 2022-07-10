import React from "react";

const ScoreMessage = ({number_truth = "0", number_result = 0, score = 0.1}) => {

    function generateMessage() {
        var res = "Is that a " + String(number_result) +"? Try again."
        if (Number(number_truth) === number_result){
            if (score > 0.5){
                res = "You are amazing! You should try another number."
            }
            else{
                res = "Great Job! Can you can do better."
            }
        }
        return res;
    }

    return (
        <h3>
            {generateMessage()}
        </h3>
    )
};

export default ScoreMessage;