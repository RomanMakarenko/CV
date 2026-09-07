# Practical Work 2 — PyTorch Neural Network

## Level 3: Neural Networks

This practical work demonstrates a small feedforward neural network built and trained from scratch with PyTorch. The complete implementation is available in the [Module2_NeuralNetwork GitHub repository](https://github.com/RomanMakarenko/Module2_NeuralNetwork).

## Goal

Build a simple binary classifier, train it, evaluate it on held-out data, and run inference on sample inputs.

## Dataset and preprocessing

- Dataset: synthetic Two Moons generated with `sklearn.datasets.make_moons`.
- Samples: 1,000 points with noise level `0.2` and `random_state=42`.
- Split: 800 training samples and 200 test samples.
- Preprocessing: `StandardScaler` is fitted on the training features and then applied to the test features, avoiding data leakage.
- Labels: binary classes `0` and `1`.

## Model

The model is a multilayer perceptron with the architecture:

```text
2 → 16 → 8 → 1
```

It uses two hidden layers with ReLU activations and one output logit for binary classification.

## Training

- Framework: PyTorch
- Loss: `BCEWithLogitsLoss`
- Optimizer: Adam
- Learning rate: `0.01`
- Training schedule: 1,000 full-batch epochs
- Output: training loss is collected and plotted with Matplotlib.

The training loop follows the standard sequence: forward pass, loss calculation, gradient reset, backpropagation, optimizer step, and loss logging.

## Evaluation and inference

After training, the script evaluates the model on the test set. It applies `torch.sigmoid` to the output logits and uses `0.5` as the classification threshold. The script also prints five sample predictions with their actual labels and probabilities.

The repository contains the executable evaluation code, but it does not store a fixed final accuracy value or a captured training-log file. Numerical results can vary because PyTorch weight initialization is not seeded in the current version.

## Reflection

The most useful part of the exercise was connecting each stage of a machine-learning workflow: preparing the data, keeping train and test transformations separate, matching tensor shapes, defining the model, and evaluating predictions. The `BCEWithLogitsLoss` choice also showed why logits are used during training while sigmoid probabilities are calculated for readable inference results.

The main limitations are the absence of a validation split, persisted metrics, and a saved model. With more time, I would add reproducible PyTorch seeding, validation metrics, mini-batch training, early stopping, model persistence, and a device abstraction for CPU/MPS execution.

## Evidence and links

- [Source repository](https://github.com/RomanMakarenko/Module2_NeuralNetwork)
- [Neural network implementation](https://github.com/RomanMakarenko/Module2_NeuralNetwork/blob/main/neural_network.py)
- [Project README](https://github.com/RomanMakarenko/Module2_NeuralNetwork/blob/main/README.md)
- Screenshot: `neural-network-practical-2.png`
