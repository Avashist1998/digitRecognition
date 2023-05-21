"""Data models."""

def create_classification_response(classification: int, score: float):
    """Creates a response model for classification

    Args:
        classification (int): The classification of the image
        score (float): The score of the classification
    Returns:
        dict: The response model

    """
    return {
        "data": {
            "classification": classification,
            "score": score
        },
        "code":200
    }


def create_error_response(error, code: int, message: str):
    """Creates a response model for failed requests

    Args:
        error (str): The error message
        code (int): The error code
        message (str): The error message
    Returns:
        dict: The response model
    """
    return {
        "error": error, 
        "code": code, 
        "message": message
    }
