import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";

function DisplayCard({ id, name, developer, tryout }) {
  const explor = `/${id}`;
  const tryit = `/try/${id}`;

  const arr = [
    "images/gpt1.jpeg",
    "images/gemini1.jpg",
    "images/palm1.jpg",
    "images/whisper1.jpeg",
    "images/dalle1.jpeg",
    "images/llama1.jpg",
    "images/claude1.jpeg",
    "images/falcon1.jpeg",
    "images/resnet1.jpeg",
    "images/deepspeech1.jpeg",
  ];

  return (
    <div className="justify-center align-center items-center flex">
      <Card className="py-4 rounded-2xl m-3 w-64 h-80 bg-slate-700">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center rounded-2xl">
          <small className="text-blue-200">{developer}</small>
          <h4 className="font-bold text-large text-yellow-200">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 rounded-2xl">
          <img
            src={arr[id]}
            alt="Card background"
            className="object-cover rounded-2xl h-40"
            height={23}
            width={300}
          />
          <div className="flex justify-center">
            <Link to={explor}>
              <button
                color="primary"
                className="m-3 border-2 border-slate-800 text-white bg-blue-700 rounded-2xl"
              >
                Explore
              </button>
            </Link>
            {tryout ? (
              <Link to={tryit}>
                <button
                  color="primary"
                  className="m-3 border-2 border-slate-800 text-white bg-blue-700 rounded-2xl"
                >
                  Tryout
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DisplayCard;
