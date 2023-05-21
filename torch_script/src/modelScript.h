#ifndef TMP_H
#define TMP_H

#include <torch/script.h>
#include <torch/torch.h>
#include <iostream>
#include <memory>

namespace F = torch::nn::functional;

torch::Tensor processInput(std::vector<int> x, int n, int m);
torch::jit::script::Module load_module(std::string modelPath);
c10::IValue predict(std::string modelPath, std::vector<int> x, int n, int m);

#endif