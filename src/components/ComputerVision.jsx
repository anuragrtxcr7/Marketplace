import DisplayCard from "./DisplayCard";

function ComputerVision({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        Computer vision, a type of artificial intelligence, enables computers to
        interpret and analyze the visual world, simulating the way humans see
        and understand their environment. It applies machine learning models to
        identify and classify objects in digital images and videos, then lets
        computers react to what they see.
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
      {data?.map((dat,i) => {
          return (
            <div key={i}>
              <DisplayCard
              id={dat.id}
              name={dat.name}
              developer={dat.developer}
              tryout={dat.try_out}
            />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ComputerVision;
