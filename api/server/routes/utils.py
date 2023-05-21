"""Utility functions for the routes"""
from io import BytesIO
import numpy as np
from PIL import Image

def get_image_from_file(file) -> Image.Image:
    """Converts a file to an image
    Args:
        file (file): The file to convert
    Returns:
        Image.Image: The converted image
    """
    return Image.open(BytesIO(file))

def resize_image(image:Image.Image) -> np.array:
    """Resizes the image to 28x28 and converts it to a numpy array
    Args:
        image (Image.Image): The image to resize
    Returns:
        np.array: The resized image
    """
    image = image.split()[-1]
    image = image.resize((32, 32))
    image = np.asarray(image, 'uint8').reshape(1, -1)
    return image

def predict(image: Image.Image, model) -> int:
    """Predicts the number in the image
    Args:
        image (Image.Image): The image to predict
        model (sklearn.model): The model to use for prediction
    Returns:
        int: The prediction
    """
    input_data = resize_image(image)
    res = model.predict(input_data)[0]
    prob = model.predict_proba(input_data).tolist()[0]
    classes = model.classes_.tolist()
    percentage = dict(zip(classes, prob))
    return res, percentage[res]
