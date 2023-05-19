type Result = {classification: number, score: number};

// canvas.toBlob(function(blob){
//     if (blob != null) {
//         getResults(url, blob).then(results => {
//             if (results !== undefined) {
//                 setNumberResult(results.classification)
//                 setScoreResult(results.score)
//                 displayResults()
//             }
//         }).catch((error) => {
//             console.log(error)
//         })


//     }
//  })

// const url =  import.meta.env.VITE_REACT_APP_SERVER_URL+"/predict"
const url = "http://localhost:8000/predict/"
const getResults = async (imageData: Blob) => {
    if (imageData != null){
        const fd = new FormData()
        fd.append('file', imageData, "file.png")
        return fetch(url, {
            method: "POST", 
            body: fd,
            headers: {"Access-Control-Allow-Origin": "*"}
            }).then(Response => { 
                return Response.json().then(Json => {
                    return {classification: Json.data.classification, score: Json.data.score} as Result;
                }).catch(err => {
                    throw err;
                });
            }).catch(err => {
                console.error(err)
                throw err;
            })
    }
}


export default getResults;