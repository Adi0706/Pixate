import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import axios from 'axios';
import randomPromt from '../Media/constants/Prompts'; 

function GenerateImage() {
  const [dataImage, setDataImage] = useState(null);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [valueInput, setValueInput] = useState(""); // State for input value
  const navigate = useNavigate();

  const generateImage = async () => {
    try {
      setGeneratingImage(true);
      const prompt = valueInput.trim(); // Use the input value for the prompt

      const response = await axios.post('http://localhost:5000/images', { prompt });
      setDataImage(response.data); // Assuming response.data is an array of image objects
    } catch (error) {
      console.log('Error:', error.message);
    } finally {
      setGeneratingImage(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(); // Trigger image generation on form submission
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * randomPromt.length);
    const randomPrompt = randomPromt[randomIndex];
    setValueInput(randomPrompt);
  };

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">
            Generate Image
          </h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
            Create Imaginative and visually stunning images through Pixate and
            share them with the community
          </p>
        </div>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center">
            <h2>Enter your prompt here</h2>
            <span className="border border-solid border-black bg-zinc-200 font-bold m-1 p-1 rounded-lg shadow-md cursor-pointer" onClick={surpriseMe}>Surprise me</span>
          </div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              name="prompt"
              placeholder="3D render of a cute tropical fish..."
              value={valueInput}
              onChange={e => setValueInput(e.target.value)} 
              className="border border-solid border-black shadow-lg p-2 rounded-xl"
            />
            <div className="h-52 flex flex-wrap items-stretch justify-between">
              {dataImage && dataImage.map((item, index) => (
                <img key={index} src={item.url} alt="generated-image" className="m-1 min-w-64 max-w-64 grow" />
              ))}
            </div>
            <button
              type="submit"
              className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              disabled={generatingImage}
            >
              {generatingImage ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default GenerateImage;
