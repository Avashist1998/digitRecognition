import { Tensor, InferenceSession } from "onnxjs";

const convertToTensor = (data: number[], height: number, width: number) => {

    const alphaImage: number[][] = []
    for (let y = 0; y < height; y++) {
        const row: number[] = []
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            row.push(data[index + 3]);
        }
        alphaImage.push(row);
    }

    // Downsample the 2D array to size 32x32
    const output2D: number[][] = []
    const factor = Math.floor(width / 32)
    for (let i = 0; i < 32; i++) {
        const row: number[] = []
        for (let j = 0; j < 32; j++) {
            let sum = 0
            for (let k = 0; k < factor; k++) {
                for (let l = 0; l < factor; l++) {
                    sum += alphaImage[i * factor + k][j * factor + l]
                }
            }
            row.push(sum / (factor * factor))
        }
        output2D.push(row)
    }

    const output: number[] = []
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < 32; j++) {
            var norm = output2D[i][j] / 255;
            norm = (norm - 0.1307) / 0.3081;
            output.push(norm)
        }
    }
    var tensor = new Tensor(new Float32Array(output), "float32", [1, 1, 32, 32]);
    return tensor;
}

;
const PATH = "/model.onnx";
var isLoaded = false;

const session = new InferenceSession();
const loadModel = async () => {
    if (isLoaded) return;
    await session.loadModel(PATH);
    isLoaded = true;
};

const predict = async (imageData: number[], n: number, m: number) => {
    await loadModel();
    const imageMatrix = convertToTensor(imageData, n, m);
    const feeds = [imageMatrix]
    const outputData = await session.run(feeds);
    const output = outputData.values().next().value;

    const total = output.data.reduce((a: number, b: number) => Math.abs(a) + Math.abs(b), 0);
    const normalized = output.data.map((x: number) => x / total);
    const score = Math.max(...normalized);
    const classification = normalized.indexOf(score);
    return {
        classification: classification,
        score: score
    }
}

export default predict;
