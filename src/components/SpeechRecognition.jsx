import DisplayCard from "./DisplayCard";

function SpeechRecognition({ data }) {
  return (
    <>
      <div className="px-20 flex flex-wrap justify-center">
        The speech recognition model works by using artificial intelligence (AI)
        to analyze your voice and language, identify by learning the words you
        are saying, and then output those words with transcription accuracy as
        model content or text data on a screen.
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

export default SpeechRecognition;
