cmake_minimum_required(VERSION 3.14 FATAL_ERROR)
project(torchScript)

# Find PyTorch library
set(TORCH_DIR "/home/avashist/Downloads/libtorch")
find_package(Torch REQUIRED)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/build")

# Define the source files and targets
file(GLOB SOURCES src/*.cpp)
add_executable(torchScript ${SOURCES})

# Link against PyTorch and TorchScript libraries
target_link_libraries(torchScript ${TORCH_LIBRARIES})

# Set C++ standard
set_target_properties(torchScript PROPERTIES CXX_STANDARD 14)

# Set output directory
# set_target_properties(torchScript PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin)