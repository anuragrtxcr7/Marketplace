import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";

function ReadMore({ data }) {
  const { modelid } = useParams();
  const [description, setDescription] = useState("");
  const gg = JSON.parse(localStorage.getItem(`${modelid}`));
  const [extra, setExtra] = useState(gg ? gg : "");

  useEffect(() => {
    localStorage.setItem(`${modelid}`, JSON.stringify(extra));
  }, [extra]);

  if (data === null || data === undefined) {
  } else {
    if (description == "") {
      setDescription(data[modelid].description);
    }
  }
  const [val, setVal] = useState("");
  const arr = [
    "images/gpt2.jpeg",
    "images/gemini2.jpeg",
    "images/palm2.jpg",
    "images/whisper2.jpeg",
    "images/dalle2.jpeg",
    "images/llama2.jpeg",
    "images/claude2.jpeg",
    "images/falcon2.jpeg",
    "images/resnet2.jpeg",
    "images/deepspeech2.jpeg",
  ];
  return (
    <>
      <div className="flex justify-evenly">
        <h1 className="headd">{data ? data[modelid].name : null}</h1>
      </div>
      <br />
      <div className="flex justify-center font-semibold">
        <h2>{data ? data[modelid].developer : null}</h2>
      </div>
      <div className="flex justify-center m-7">
        <img
          alt="Card background"
          className="object-cover rounded-2xl"
          src={arr[modelid]}
          width={500}
        />
      </div>
      <div>
        <h1 className="flex justify-center">Use Cases</h1>
        <br />
        <ol>
          <li>
            {data
              ? data[modelid].use_case.map((ele, i) => {
                  return (
                    <div className="flex justify-center font-semibold" key={i}>
                      {ele}
                    </div>
                  );
                })
              : null}
          </li>
        </ol>
        <br />
        <h1 className="flex justify-center ">Description</h1>
        <br />
        <div className="flex px-28 font-medium desc">
          {data ? description + extra : null}
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="flex justify-center ">Add information</h1>
        <p className="flex justify-center ">Only for Developers of the model</p>
        <br />
        <div className="flex justify-center">
          <input
            type="text"
            className="text-white rounded-2xl m-1 p-2"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Button
            color="primary"
            className="m-1 rounded-2xl"
            onClick={(e) => {
              setVal("");
              setExtra((past) => past + " " + val + ".");
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default ReadMore;
