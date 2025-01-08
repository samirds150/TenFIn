import quantum1 from "./images/quantum1.jpg"; 
import quantum2 from "./images/quantum2.jpg";
import quantum3 from "./images/quantum3.jpg";
import quantum4 from "./images/quantum4.jpg";

export const contentData = [
  {
    title: "Premise of QML",
    description:
      "Quantum Machine Learning (QML) provides a new avenue for analyzing complex data, leveraging quantum computing's unique ability to capture patterns that classical algorithms might overlook. While QML is not necessarily faster in this application, its strength lies in understanding and processing intricate relationships in data, especially when classical approaches struggle to find meaningful signals.",
    image: quantum1
  },
  {
    title: "Parameter Ansatz",
    description:
      "The Parameter Ansatz forms the core of quantum models, defining how quantum circuits are structured to process data. It is a set of tunable quantum gates and transformations that are optimized during model training to capture hidden data patterns. In this demo, we'll explore how we build and adjust the ansatz to fit our problem, learning more nuanced representations of the data",
    image: quantum2
  },
  {
    title: "Quantum Kernels",
    description:
      "Quantum kernels provide a powerful way to compare data in a high-dimensional quantum feature space. By leveraging quantum states, we can measure similarity between data points with higher precision that classical kernels. Quantum kernels allow us to capture the intricacies of the data's underlying structure, enabling us to achieve better performance on complex task",
    image: quantum3
  },
  {
    title: "Example: Elliptic Problem",
    description:
      "The Elliptic Problem is based on an open-source dataset that provides valuable insights into cryptocurrency transactions. This dataset is particularly useful for exploring fraud detection techniques, as it includes both legitimate and illicit transactions. In this demo, we will demonstrate how QML, throught the use of quantum kernels and parameter ansatz, can improve the identification of pattern in this data, leveraging quantum models to detect signals that may be missed by classical approaches",
    image: quantum4
  },
];