### Introduction 


```
    The folder contain the api all the files that are need to run the api expect the model binaries. We have created a docker image for ease of testing and deployment.
    
    # Commands to get the docker image up and running 
    
    cd api
    docker image build -t digitrecognizationapi .
    docker run -d --name digitRecogniationAPI -p 8000:8000 -e PORT=8000 digitrecognizationapi:latest

```