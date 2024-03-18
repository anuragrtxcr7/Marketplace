import DisplayCard from "./DisplayCard";

function Home({ data }) {
  return (
    <>
      <div className="px-24 flex flex-wrap justify-center">
        Welcome to Large Language Model/Artificial Intelligence Market Place. A
        large language model is a language model notable for its ability to
        achieve general-purpose language generation and other natural language
        processing tasks such as classification. The term generative AI also is
        closely connected with LLMs, which are, in fact, a type of generative AI
        that has been specifically architected to help generate text-based
        content. Here are 10 of the most Famous Large Language Models. There are
        dedicated pages for each model and some of them are available for trying
        out!!!
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
// }

export default Home;
