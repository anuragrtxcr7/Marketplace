import DisplayCard from "./DisplayCard";

function ReinforcementLearning({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        Reinforcement learning (RL) is a machine learning (ML) technique that
        trains software to make decisions to achieve the most optimal results.
        It mimics the trial-and-error learning process that humans use to
        achieve their goals.
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

export default ReinforcementLearning;
