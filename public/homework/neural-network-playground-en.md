# Neural Network Playground - Comparison of Three Experiments

## 1. Goal

In this practical exercise I used [TensorFlow Neural Network Playground](https://playground.tensorflow.org/), an interactive simulator that shows how a neural network learns to classify data without writing code.

I kept the `Spiral` dataset unchanged and compared three configurations:

1. one hidden layer with 4 neurons and `ReLU`;
2. three hidden layers with 8 neurons per layer and `ReLU`;
3. three hidden layers with 8 neurons per layer and `Sigmoid`.

The goal was to observe how network capacity and activation functions affect classification quality.

---

## 2. Common settings

The following settings were used in all three runs:

| Parameter | Value | Explanation |
|---|---:|---|
| **Dataset** | `Spiral` | Two classes of points are arranged as spirals. |
| **Problem type** | `Classification` | The network predicts the class of each point. |
| **Learning rate** | `0.03` | The size of each step used to update the weights. |
| **Regularization** | `None` | No additional weight constraint is used. |
| **Regularization rate** | `0` | The regularization strength is zero. |
| **Training/test split** | `50% / 50%` | Half of the data trains the model and half evaluates it. |
| **Noise** | `0` | No artificial noise is added to the points. |
| **Batch size** | `10` | Ten examples are processed before one weight update. |

### Why Spiral is difficult

The classes in the `Spiral` dataset cannot be separated with one straight line. The network must create a complex curved boundary between the turns of two spirals. This makes the dataset useful for showing the difference between small and larger neural networks.

---

## 3. Results comparison

| Experiment | Architecture | Activation | Test loss | Training loss | Conclusion |
|---|---|---|---:|---:|---|
| 1 | 1 layer x 4 neurons | ReLU | `0.476` | `0.468` | The model is too simple for the spiral. |
| 2 | 3 layers x 8 neurons | ReLU | `0.006` | `0.000` | The best result among the three runs. |
| 3 | 3 layers x 8 neurons | Sigmoid | `0.025` | `0.009` | A good result, but slightly worse than ReLU. |

> **Correction note:** The first version of the third experiment used the wrong screenshot. It has been replaced. The current Screenshot 3 is `neural-network-3.png`; it uses `Sigmoid` and shows `Test loss = 0.025` and `Training loss = 0.009`.

---

## 4. Screenshot 1 - Spiral + 1 layer + 4 neurons + ReLU

![Screenshot 1 - Simple Neural Network](/homework/neural-network-1.png)

### Settings

- `Dataset = Spiral`;
- `1 hidden layer`;
- `4 neurons`;
- `Activation = ReLU`;
- `Learning rate = 0.03`;
- `Training loss = 0.468`;
- `Test loss = 0.476`.

### What the graph shows

The network created large smooth blue and orange regions, but they do not follow all the curves of the spirals. Some points are located on a background belonging to the other class, so the model makes mistakes.

Training and test loss are close: the difference is only `0.008`. This means that the model performs similarly on the training and test parts. However, both values are fairly high, so the model has not learned the task well.

This is an example of **underfitting**: the network is not complex enough to represent the spiral pattern, even in the training data.

---

## 5. Screenshot 2 - Spiral + 3 layers + 8 neurons + ReLU

![Screenshot 2 - Deep ReLU Network](/homework/neural-network-2.png)

### Settings

- `Dataset = Spiral`;
- `3 hidden layers`;
- `8 neurons` in each layer;
- `Activation = ReLU`;
- `Learning rate = 0.03`;
- `Training loss = 0.000`;
- `Test loss = 0.006`.

### What changed

Compared with the first run, the network became much larger. Instead of 4 neurons in one layer, it now has 8 neurons in each of three layers.

A larger network can combine simple features step by step. One layer can detect separate regions of the input space, while later layers combine them into a complex curved boundary between the spirals.

### Loss interpretation

- `Training loss = 0.000` means that the error on the training data is practically zero. The Playground displays the value rounded to three decimal places.
- `Test loss = 0.006` means that the error on the test data is also very small.
- The difference between the two values is approximately `0.006`.

This is a very good result. The model did not only fit the training points; it also classifies most test points correctly. A large gap between training and test loss could indicate overfitting, but the gap here is small.

At the same time, one screenshot cannot prove that the model will always work well on every new dataset. A complete evaluation would require additional data or repeated runs with different initial conditions.

---

## 6. Screenshot 3 - Spiral + 3 layers + 8 neurons + Sigmoid

![Screenshot 3 - Sigmoid Network](/homework/neural-network-3.png)

### Settings

- `Dataset = Spiral`;
- `3 hidden layers`;
- `8 neurons` in each layer;
- `Activation = Sigmoid`;
- `Learning rate = 0.03`;
- `Training loss = 0.009`;
- `Test loss = 0.025`.

### What the result shows

The architecture is the same as in the second experiment. Only the activation function changed: `Sigmoid` was used instead of `ReLU`.

The Sigmoid network also learned to classify the spiral data well: both loss values are much lower than the approximately `0.47` values in the first run. However, its result is slightly worse than the ReLU network:

```text
ReLU:    Test loss = 0.006
Sigmoid: Test loss = 0.025
```

The difference between training and test loss is `0.016`:

```text
0.025 - 0.009 = 0.016
```

Test loss is higher than training loss, which is normal. The model optimized its weights using training data, but the test data was not used for direct weight updates. The gap is small, so this run does not show an obvious sign of severe overfitting.

### Why Sigmoid produced a slightly worse result

The `Sigmoid` function is defined as:

```text
sigmoid(x) = 1 / (1 + e^(-x))
```

It maps values to the range from `0` to `1`. For very large positive or negative inputs, the function saturates: its output approaches `1` or `0`, and its gradient becomes very small.

As a result, weight updates can become slower in a deep network. This problem is called the **vanishing gradient**. In this particular run, Sigmoid learned the task well, but not as effectively as ReLU.

This does not mean that Sigmoid is always worse. The result depends on the number of training steps, initial weights, random seed, learning rate, and dataset. The correct conclusion for this experiment is: **ReLU achieved the lower test loss, while Sigmoid also performed well but produced a slightly weaker result**.

---

## 7. What a neural network does

The network receives the coordinates of each point:

- `X1` - the first coordinate;
- `X2` - the second coordinate.

Each neuron then performs approximately these steps:

1. receives values from the input or the previous layer;
2. multiplies them by weights;
3. adds a bias;
4. applies an activation function;
5. passes the result to the next layer.

A simplified formula for one neuron is:

```text
output = activation(weight1 * input1 + weight2 * input2 + bias)
```

At the end, the output layer uses the resulting signals to decide which class a point belongs to: blue or orange.

The network does not receive a ready-made instruction for drawing a spiral. It gradually adjusts its weights while reducing the error of its predictions.

---

## 8. How to read the central diagram

### Input features `X1` and `X2`

These are the point coordinates. They provide information to the network but do not make the final decision themselves.

### Hidden layers

A hidden layer is an intermediate computation level between the input and the output.

- The first experiment uses 1 layer x 4 neurons.
- The second experiment uses 3 layers x 8 neurons.
- The third experiment uses 3 layers x 8 neurons.

More neurons and layers allow the model to represent more complex patterns. However, a model that is too large can overfit.

### Lines between neurons

The lines represent connection weights:

- a thicker line means a larger influence;
- a thinner line means a smaller influence;
- blue and orange colors show the sign and direction of a weight's contribution;
- the lines are not data paths and do not show accuracy.

---

## 9. How to read the Output graph

On the right, the Playground shows points and the background of the model's predictions:

- blue points are examples of one class;
- orange points are examples of the other class;
- a blue background means that the model leans toward the blue class;
- an orange background means that the model leans toward the orange class;
- a light region means that the prediction is less certain or close to the class boundary.

If a point is located on a background of its own color, the prediction is likely correct. If a point is located in the other color region, it may be a mistake.

In the first run, the boundary consists of large simple regions and follows the spirals poorly. In the second run, the deep ReLU network creates a much more accurate boundary. In the third run, Sigmoid also creates good separation, but the error value is slightly higher.

---

## 10. What Training loss and Test loss mean

**Loss** is a numerical estimate of prediction error. It considers not only whether the class was correct, but also how confidently the model made the prediction.

As a general rule, a lower loss means a better result.

### Training loss

`Training loss` is the error on the data used to train the model. The network updates its weights using these examples, so training loss is often slightly lower.

### Test loss

`Test loss` is the error on held-out data that was not used for direct weight updates. It shows how well the model generalizes the learned pattern to other points.

### Important clarification

Loss is not accuracy expressed as a percentage. For example:

```text
loss = 0.025
```

does not automatically mean `97.5%` or `2.5%` accuracy. Loss and accuracy are different metrics, and accuracy cannot be calculated directly from one loss value.

---

## 11. Comparison of the two results discussed

### ReLU: `Training loss = 0.000`, `Test loss = 0.006`

This means:

- the model represented the training data with almost no error;
- the error on the test data is also very small;
- the difference between training and test loss is small;
- the network has enough capacity for the `Spiral` dataset;
- there is no obvious sign of severe overfitting.

### Sigmoid: `Training loss = 0.009`, `Test loss = 0.025`

This means:

- the model learned the training data well, but not perfectly;
- the error on the test data is slightly higher;
- the difference of `0.016` is normal when the two subsets contain different examples;
- the result is still good because both values are much lower than `0.47`;
- in this run, Sigmoid was weaker than ReLU but did not fail.

### Comparison conclusion

Increasing the network from one layer with four neurons to three layers with eight neurons per layer produced the largest improvement. Replacing ReLU with Sigmoid in the larger network increased the error slightly, but Sigmoid still produced a good result.

---

## 12. Underfitting and overfitting

### Underfitting

Underfitting occurs when a model is too simple and cannot represent the pattern even in the training data.

The first experiment shows this behavior: both training loss and test loss remain close to `0.47`.

### Overfitting

Overfitting occurs when a model performs very well on training data but much worse on test data.

The second experiment has `0.000` and `0.006`, while the third has `0.009` and `0.025`. There are gaps, but they are not large compared with the loss values themselves. Therefore, these screenshots do not show obvious severe overfitting.

---

## 13. Reflection

I used one `Spiral` dataset and compared three neural network configurations: one hidden layer with four ReLU neurons, three layers with eight ReLU neurons per layer, and three layers with eight Sigmoid neurons per layer. In the first run, the model was too simple and produced a training loss of `0.468` and a test loss of `0.476`. After increasing the network size, the ReLU version produced a much better result: training loss decreased to `0.000` and test loss to `0.006`. In the corrected third run, Sigmoid also handled the task well, with training loss of `0.009` and test loss of `0.025`, but it was weaker than ReLU. I was surprised that changing the number of layers and neurons had a much larger effect than the initial small model could provide. The experiment showed that quality depends both on network capacity and on the activation function.

---

## 14. Summary

The best result in this series came from the **3 hidden layers x 8 neurons + ReLU** network: `Training loss = 0.000`, `Test loss = 0.006`. It had enough parameters to build a complex boundary between the spiral classes. The **3 hidden layers x 8 neurons + Sigmoid** network also learned the task well: `Training loss = 0.009`, `Test loss = 0.025`. The baseline **1 hidden layer x 4 neurons + ReLU** network was not complex enough, so its loss remained close to `0.47`. These results show that low and close training/test loss values usually indicate good generalization, while high values on both sets indicate underfitting.

---

## 15. Short glossary

- **Neuron** - a computational unit in a network.
- **Hidden layer** - an intermediate layer between input and output.
- **Weight** - a parameter that determines the strength of a signal's influence.
- **Bias** - an additional offset in a neuron's formula.
- **Activation function** - a function that adds non-linearity.
- **ReLU** - `max(0, x)`; negative values are replaced with zero.
- **Sigmoid** - a function that maps values to the range `0..1`.
- **Training loss** - error on training data.
- **Test loss** - error on test data.
- **Underfitting** - a model is not complex enough for the pattern.
- **Overfitting** - a model memorizes training data and performs worse on new data.
