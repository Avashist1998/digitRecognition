import os
from fastapi.datastructures import UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter, Request, Body, File


from .utils import predict, get_image_from_file, resize_image
from ..models.classifier import Classifier, ClassifierType

from ..models.classification_data import(
    create_classification_response,
    create_error_response,
)


local_model = os.path.join(os.getcwd(),  "server/classifier_binaries/RandomForestClassifier.pkl")

model_type = os.getenv("MODEL_TYPE", "RANDOM_FOREST")
model_path = os.getenv("MODEL_PATH", local_model)


router = APIRouter()
if model_type == "RANDOM_FOREST":
    MODEL = Classifier(ClassifierType.RANDOM_FOREST, model_path)
else:
    MODEL = Classifier(ClassifierType.PY_TORCH, model_path)
router.model = MODEL

@router.post("/", response_description="Returns what number the image look resembles")
async def get_classification(file: UploadFile = File(...)):
    """Returns what number the image look like"""

    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return create_error_response("request failed", 404, "Invalid file extensions")

    contents = await file.read()
    image = get_image_from_file(contents)
    image = resize_image(image)
    res, score = MODEL.predict(image)
    return create_classification_response(int(res), score)
