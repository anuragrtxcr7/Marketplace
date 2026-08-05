import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { Button } from "@nextui-org/react";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function TryGemini() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  async function fileToBase64(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.readAsDataURL(file);
    });
  }

  const handle = async () => {
    try {
      setLoading(true);

      let input;

      if (image) {
        const base64 = await fileToBase64(image);

        input = [
          {
            type: "text",
            text: prompt,
          },
          {
            type: "image",
            mime_type: image.type,
            data: base64,
          },
        ];
      } else {
        input = prompt;
        
      }

      const interaction = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input,
      });

      setResponse(interaction.output_text);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <h1 className="flex justify-center text-cyan-400 text-3xl">
        Gemini Image + Text
      </h1>

      <br />

      <div className="flex justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
      </div>

      <br />

      {preview && (
        <div className="flex justify-center">
          <img
            src={preview}
            alt=""
            className="w-80 rounded-lg"
          />
        </div>
      )}

      <br />

      <div className="flex justify-center gap-3">
        <input
          className="rounded-xl px-4 py-2 text-black w-96"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask something..."
        />

        <Button
          color="primary"
          onClick={handle}
        >
          Ask Gemini
        </Button>
      </div>

      <br />

      <div className="flex justify-center">
        {loading ? (
          <p>Generating...</p>
        ) : (
          <div className="max-w-4xl whitespace-pre-wrap">
            {response}
          </div>
        )}
      </div>
    </>
  );
}

export default TryGemini;