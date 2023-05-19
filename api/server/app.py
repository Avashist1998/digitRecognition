from fastapi import FastAPI
from .routes.classify_image import router as NumberClassifierRouter
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(NumberClassifierRouter, tags=['NumberClassifierRouter'], prefix="/predict")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:5175"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=['Root'])
async def reat_root():

    return {
        "message": "api main page"
        }
