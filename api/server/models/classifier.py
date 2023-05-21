"""Classifier class"""
import numpy as np
from enum import Enum
from typing import Tuple
import pickle
import torch


class ClassifierType(Enum):
    """Enum for classifier types"""
    RANDOM_FOREST = 1
    PY_TORCH = 2

class Classifier:
    """class for all classifiers"""

    def __init__(self, classifier_type: ClassifierType, path: str):
        """Constructor for Classifier
        Args:
            classifier_type (ClassifierType): The type of classifier
            path (str): The path to the classifier
        """
        self.classifier_type = classifier_type
        self.path = path
        if classifier_type == ClassifierType.RANDOM_FOREST:
            self._clf = pickle.load(open(path, "rb"))
        elif classifier_type == ClassifierType.PY_TORCH:
            self._clf = torch.jit.load(path)
            self._clf.eval()


    def predict(self, image: np.array) -> Tuple[int, float]:
        """Predict the class of each sample in X

        Args:
            image (np.array): The image to predict
        Returns:
            int: The prediction
        """
        if self.classifier_type == ClassifierType.RANDOM_FOREST:
            return self._clf.predict(image), self._clf.predict_proba(image)

        elif self.classifier_type == ClassifierType.PY_TORCH:
            image = torch.from_numpy(image).float()
            image = image / 255
            image = (image - 0.1307) / 0.3081
            image = image.reshape(1, 1, 32, 32)
            res_vector = self._clf(image)
            scores = torch.abs(res_vector)/torch.sum(torch.abs(res_vector))
            print(torch.max(scores, 1).values.item())
            return torch.argmax(res_vector, 1).item(), torch.max(scores, 1).values.item()
