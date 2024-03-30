import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import Loading from "../Components/Loading";
import { getRandomPrompt } from "../Utils/randomPrompts";

import Header from "../Components/Header";
import axios from 'axios';

function GenerateImage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
  
    prompt: ""
  
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);




  const generateImage = async () => {
    try {
      const prompt = "A cute baby sea otter"; // Your prompt here
  
      const response = await axios.post('http://localhost:5000/images', { prompt });
      
      console.log(response.data); 
    } catch(error) {
      console.log('Error:', error.message);
    }
  };
  
  generateImage();
  
  

  const handleSubmit = () => {};
  const handleChange = (e) => {

  };
  const handleSurpriseMe = () => {

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
          <div className="flex flex-col gap-5">
           
            <FormField
              LabelName="Prompt"
              type="text"
              name="prompt"
              placeholder="3D render of a cute tropical fish in an aquarium on a dark blue background, digital art"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
           
         
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
