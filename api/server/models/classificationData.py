from typing import List 

def ClassificationResponseModel(classification:int, score:float):
    return {
        "data": {
            "classification":classification,
            "score": score
        },
        "code":200
    }



def ErrorResponseModel(error, code, message):
    return {
        "error": error, 
        "code": code, 
        "message": message
        }
