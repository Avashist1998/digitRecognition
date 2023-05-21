"""Implementation of LeNet5 Model"""
import torch
import torch.nn as nn


class LeNet5(nn.Module):
    """LeNet Model Implementation"""
    def __init__(self, n_classes:int = 10):
        """Constructor for LeNet5 Model
        Args:
            n_classes (int, optional): Number of classes. Defaults to 10.
        """
        super(LeNet5, self).__init__()

        self.layer1 = nn.Sequential(
            nn.Conv2d(1, 6, kernel_size=5),
            nn.Tanh(),
            nn.AvgPool2d(2, 2)
        )

        self.layer2 = nn.Sequential(
            nn.Conv2d(6, 16, kernel_size=5),
            nn.Tanh(),
            nn.AvgPool2d(2, 2)
        )
        self.layer3 = nn.Sequential(
            nn.Conv2d(in_channels=16, out_channels=120, kernel_size=5, stride=1),
            nn.Tanh()
        )

        self.fc1 = nn.Sequential(
            nn.Linear(400, 120),
            nn.Tanh()
        )

        self.fc2 = nn.Sequential(
            nn.Linear(120, 84),
            nn.Tanh()
        )

        self.fc3 = nn.Sequential(
            nn.Linear(84, n_classes)
        )

    def forward(self, data: torch.Tensor) -> torch.Tensor:
        """Forward pass of the model
        Args:
            data (torch.Tensor): Input tensor
        Returns:
            torch.Tensor: Output tensor
        """
        out = self.layer1(data)
        out = self.layer2(out)
        out = out.reshape(out.size(0), -1)
        out = self.fc1(out)
        out = self.fc2(out)
        out = self.fc3(out)
        return out

    def name(self):
        """Returns the name of the model"""
        return "LeNet5"
