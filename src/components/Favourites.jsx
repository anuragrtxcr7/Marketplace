import DisplayCard from "./DisplayCard";

function Favourites({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        Here contain some Models that are kinda Favourites or we could say are
        more liked than the others. The main reason behind this is Accessiblity.
        The following models are friendly for both Users and Developers who are
        using API integration. Most of them have 0 or minimilistic cost in their
        base models and offer wide varities of use-cases hence reaching much
        wider audience.{" "}
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

export default Favourites;
