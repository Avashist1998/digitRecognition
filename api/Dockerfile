FROM python:3.9

ENV PORT=80

WORKDIR /code 

COPY ./main.py /code/
COPY ./server /code/server
COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

CMD ["python3", "main.py"]