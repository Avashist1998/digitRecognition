from typing import List, Optional
from fastapi import APIRouter, Request, Body

from fastapi.encoders import jsonable_encoder

from ..models.classificationData import(
    ClassificationResponseModel,
    ErrorResponseModel
)

router = APIRouter()


@router.get("/", response_description="Returns what number the image look like")
async def getClassificationResults(image:int = None):
    if (image != None):
        return ClassificationResponseModel(1, 0.94)
    return ErrorResponseModel("request failed", 404, "Invalid input" )

