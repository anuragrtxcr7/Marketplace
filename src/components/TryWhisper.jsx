import { useState } from "react";
import React from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const model = "whisper-1";

function TryWhisper() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handle = () => {
    const file_url = URL.createObjectURL(file);
    const audio = new Audio(file_url);
    audio.play();
  };

  const fetchAudioFile = async () => {
    setIsLoading(true);
    if (!file) return;
    const formData = new FormData();
    formData.append("model", model);
    formData.append("file", file);

    axios
      .post("https://api.openai.com/v1/audio/transcriptions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((res) => {
        setResponse(res.data.text);
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1 className="flex justify-center text-cyan-400">Whisper AI</h1>
      <br />
      <p className="flex justify-center"> Speech to Text</p>
      <br />

      <div className="flex justify-center">
        <label htmlFor="input">Choose an audio File</label>
      </div>
      <br />
      <div className="flex justify-center">
        <input type="file" accept=".mp3" onChange={onChangeFile} />
      </div>
      <br />
      <div className="flex justify-center m-2">
        <Button color="primary" onClick={handle}>
          Play the audio
        </Button>
      </div>
      <div className="flex justify-center m-2">
        <Button color="primary" onClick={fetchAudioFile}>
          Transcribe the Audio
        </Button>
      </div>
      {isLoading ? (
        <p className="flex justify-center">Loading...</p>
      ) : (
        <div className="flex justify-center">
          <h2>{response}</h2>
        </div>
      )}
    </>
  );
}

export default TryWhisper;
