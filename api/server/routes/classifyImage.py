import os
import pickle
from typing import List, Optional
from fastapi.datastructures import UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter, Request, Body, File


from .utils import predict, fileToImage


from ..models.classificationData import(
    ClassificationResponseModel,
    ErrorResponseModel
)

tmp_path = os.path.join(os.getcwd(),  "server/classifier_binaries/RandomForestClassifier.pkl")
model_path = os.getenv("MODEL_PATH", tmp_path)

router = APIRouter()
router.model = pickle.load(open(model_path, "rb")) 


@router.post("/", response_description="Returns what number the image look like")
async def getClassificationResults(file: UploadFile = File(...)):
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return ErrorResponseModel("request failed", 404, "Invalid file extensions")

    contents = await file.read()
    image = fileToImage(contents)
    res, score = predict(image, router.model)
    return ClassificationResponseModel(int(res), score)
    

