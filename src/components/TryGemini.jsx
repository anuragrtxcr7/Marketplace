import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@nextui-org/react";

import React from "react";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

function TryGemini() {
  const [generativeText, setGenerativeText] = useState("");
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [promptt, setPromptt] = useState("");

  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);

  const onFileChange = (e) => {
    setFile(e.target);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  const handle = async () => {
    setIsLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = promptt;
    setPromptt("");
    const imageParts = await Promise.all(
      [...file.files].map(fileToGenerativePart)
    );

    const result = await model.generateContent([prompt, ...imageParts]);
    setGenerativeText(result.response.text());
    setIsLoading(false);
  };

  return (
    <>
      <h1 className="flex justify-center text-cyan-400">
        Gemini's Image to Text AI
      </h1>
      <br />
      <p className="flex justify-center">
        {" "}
        Image and Text Prompt asking questions about the Image to Text
      </p>
      <br />
      <br />
      <div className="flex justify-center">
        <input type="file" onChange={onFileChange} />
      </div>
      <br></br>
      <div className="flex justify-center">
        <img className="w-80 h-52" src={imageURL} />
      </div>
      <div className="flex justify-center m-3 text-white ">
        <input
          className="rounded-3xl px-3"
          type="text"
          value={promptt}
          onChange={(e) => setPromptt(e.target.value)}
          placeholder="Enter Prompt"
        />
        <Button
          className="flex justify-center m-2"
          color="primary"
          onClick={handle}
        >
          Generate Text
        </Button>
      </div>
      {isLoading ? (
        <p className="flex justify-center">Your Response is being loaded ...</p>
      ) : (
        <div className="flex justify-center p-3 flex-wrap">
          {generativeText}
        </div>
      )}
    </>
  );
}

export default TryGemini;
