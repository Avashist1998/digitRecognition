#include <torch/script.h>
#include <torch/torch.h>
#include <iostream>
#include <memory>

#include "modelScript.h"

namespace F = torch::nn::functional;

torch::Tensor processInput(std::vector<int> x, int n, int m) {
  torch::Tensor data = torch::from_blob(x.data(), {1, 1, n, m});
  data = torch::nn::functional::interpolate(data, torch::nn::functional::InterpolateFuncOptions().size(std::vector<int64_t>({32, 32})).mode(torch::kNearest));
  data = data / 255;
  data = (data - 0.1307) / 0.3081;
  return data;
}

torch::jit::script::Module load_module(std::string modelPath) {
  std::cout << "Loading model\n" << std::endl;
  torch::jit::script::Module module = torch::jit::load(modelPath);
  std::cout << "Model loaded\n" << std::endl;
  return module;
}

c10::IValue predict(std::string modelPath , std::vector<int> x, int n, int m) {
  /*
  * x: input image as a vector of size n*m*1
  * n: height of the image
  * m: width of the image
  * image is a unit8 black and white image

  * returns: a vector of size 10 with the probability of each digit
  */
  torch::jit::script::Module module = load_module(modelPath);
  torch::Tensor data = processInput(x, n, m);
  auto result = module.forward(std::vector<torch::jit::IValue>{data});
  return result;
}


