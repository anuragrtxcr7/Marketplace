import DisplayCard from "./DisplayCard";

function TransformerBased({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        Transformer models modify this process by incorporating something called
        a self-attention mechanism. Instead of processing data in order, the
        mechanism enables the model to look at different parts of the sequence
        all at once and determine which parts are most important.
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

export default TransformerBased;
