import DisplayCard from "./DisplayCard";

function ConvulationalOrRecursiveNeuralNetwork({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        A convolutional neural network (CNN) is a type of artificial neural
        network used primarily for image recognition and processing, due to its
        ability to recognize patterns in images. A CNN is a powerful tool but
        requires millions of labelled data points for training. Recursive Neural
        Networks (RvNNs) are deep neural networks used for natural language
        processing. We get a Recursive Neural Network when the same weights are
        applied recursively on a structured input to obtain a structured
        prediction.
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {data?.map((dat) => {
          return (
            <DisplayCard
              id={dat.id}
              name={dat.name}
              developer={dat.developer}
              tryout={dat.try_out}
            />
          );
        })}
      </div>
    </>
  );
}

export default ConvulationalOrRecursiveNeuralNetwork;
