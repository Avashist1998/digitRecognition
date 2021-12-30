import numpy as np
from PIL import Image, ImageOps
from io import BytesIO

def fileToImage(file) -> Image.Image:
    return Image.open(BytesIO(file))

def imageResize(image:Image.Image) -> np.array:
    image = image.split()[-1]
    image = image.resize((28,28))
    image = np.asarray(image, 'uint8').reshape(1, -1)
    return image



def predict(image: Image.Image, model) -> int:
    input_data = imageResize(image)
    res = model.predict(input_data)[0]
    prob = model.predict_proba(input_data).tolist()[0]
    classes = model.classes_.tolist()
    percentage = dict(zip(classes, prob))
    return res, percentage[res]