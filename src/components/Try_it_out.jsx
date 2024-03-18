import DisplayCard from "./DisplayCard";

function Try_it_out({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        Here are some Models that are available for trying out
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

export default Try_it_out;
