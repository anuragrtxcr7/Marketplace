import { useEffect, useState } from "react";
import ReadMore from "./components/ReadMore";
import {Routes, Route , useNavigate} from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import Homepage from "./components/Homepage";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Try_it_out from "./components/Try_it_out";
import SpeechRecognition from "./components/SpeechRecognition";
import ComputerVision from "./components/ComputerVision";
import ReinforcementLearning from "./components/ReinforcementLearning";
import TransformerBased from "./components/TransformerBased";
import ConvulationalOrRecursiveNeuralNetwork from "./components/ConvulationalOrRecursiveNeuralNetwork";
import TryGPT from "./components/TryGPT";
import TryGemini from "./components/TryGemini";
import TryWhisper from "./components/TryWhisper";
import TryDallE from "./components/TryDallE";

export default function App() {

  const [Data,setData] = useState(null);
  const [favData,setFavData] = useState(null);
  const [tryData,setTryData] = useState(null);
  const [speechData,setSpeechData] = useState(null);
  const [visionData,setVisionData] = useState(null);
  const [reinforcementData,setReinforcementData] = useState(null);
  const [trandformerData,setTransformerData] = useState(null);
  const [neuralData,setNeuralData] = useState(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/anuragrtxcr7/data_json/models")
        .then(response => response.json())
        .then(response => {
          setData(response)
          setTryData(response.filter((dat)=>dat.try_out))
          setFavData(response.filter((dat)=>{
            return dat.favourite;
          }))
          setSpeechData(response.filter((dat)=>{
            return dat.speech_recognition;
          }))
          setVisionData(response.filter((dat)=>{
            return dat.computer_vision;
          }))
          setReinforcementData(response.filter((dat)=>{
            return dat.reinforcement_learning;
          }))
          setTransformerData(response.filter((dat)=>{
            return dat.Transformer_Based;
          }))
          setNeuralData(response.filter((dat)=>{
            return dat.ConvolutionOrRecurrentNeuralNetwork;
          }))
        });
  }, []);


  const navigate = useNavigate();
  return (
   <>
   <NextUIProvider navigate={navigate}>
   <Routes>
    <Route path="/" element={<Homepage/>}>
      <Route path="" element={<Home data = {(Data)?(Data):(null)}/>}/>
      <Route path="favourites" element={<Favourites data={favData}/>}/>
      <Route path="try" element={<Try_it_out data={tryData}/>}/>
      <Route path="speech" element={<SpeechRecognition data={speechData}/>}/>
      <Route path="vision" element={<ComputerVision data={visionData}/>}/>
      <Route path="reinforcement" element={<ReinforcementLearning data={reinforcementData}/>}/>
      <Route path="transformer" element={<TransformerBased data={trandformerData}/>}/>
      <Route path="NeuralNetwork" element={<ConvulationalOrRecursiveNeuralNetwork data={neuralData}/>}/>
      <Route path=":modelid" element={<ReadMore data = {(Data)?(Data):(null)}/>}/>
      <Route path="try/0" element={<TryGPT/>}/>
      <Route path="try/1" element={<TryGemini/>}/>
      <Route path="try/3" element={<TryWhisper/>}/>
      <Route path="try/4" element={<TryDallE/>}/>
    </Route>
   </Routes>
   </NextUIProvider>
   </> 
  )
}
