#include <torch/torch.h>
#include "modelScript.h"

#include <iostream>
#include <memory>


int main(int argc, const char* argv[]) {
  std::vector<torch::jit::IValue> example;
  int n = 2;
  int m = 5;
  std::vector<int> x = {1,2,3,4,5,6,7,8,9,10};
  try {
    std::string modelPath = "/home/avashist/digitRecognition/model_exploration/models/model.pt";
    auto result = predict(modelPath, x, n, m);
    std::cout << result << std::endl;
    std::cout <<  result.toTensor() << std::endl;
    torch::Tensor out_tensor = result.toTensor().argmax(1);
    std::cout << "The prediction is :"<< out_tensor << std::endl;
    return -1;
  }
  catch (const c10::Error& e) {
    std::cerr << "error loading the model\n";
    std::cout << e.msg() << std::endl;
    return -1;
  }

  std::cout << "ok\n";
}