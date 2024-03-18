import { useState } from "react";
import { Button } from "@nextui-org/react";
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

function TryDallE() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "dall-e-2",
          prompt: prompt,
          n: 1,
          size: "256x256",
        }),
      }
    );
    let data = await response.json();
    setImage(data.data[0].url);
    setIsLoading(false);
  }

  return (
    <>
      <div className="App">
        <h1 className="flex justify-center text-cyan-400">DALL-E-2</h1>
        <br />
        <p className="flex justify-center"> Text to Image Generation</p>
        <br />
        <br />
        <div className="flex justify-center m-2 ">
          <input
            className="rounded-2xl px-3 text-white"
            onChange={(e) => setPrompt(e.target.value)}
            type="text"
            placeholder="Enter Your Prompt"
          />
          <Button color="primary" className="m-2" onClick={fetchData}>
            Generate
          </Button>
        </div>
        <div>
          {isLoading ? (
            <>
              <p className="flex justify-center">Loading..</p>
              <p className="flex justify-center">
                please wait until image is ready
              </p>
            </>
          ) : (
            <div className="flex justify-center">
              <img src={image} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TryDallE;
