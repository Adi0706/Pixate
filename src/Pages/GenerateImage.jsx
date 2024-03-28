import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../Components/FormField";
import Loading from "../Components/Loading";
import { getRandomPrompt } from "../Utils/randomPrompts";
import preview from "../Media/preview.png";
import Header from "../Components/Header";

function GenerateImage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    image: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async() => {
    if(form.prompt){
      try{
        setGeneratingImage(true);
        const response = await fetch("http://localhost:3001/api/v1/pixate",{
          method:"POST",
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify({prompt:form.prompt})
        })
        const data = await response.json() ; 
        setForm({...form,image:`data:image/jpeg;base64,${data.image}`})
      }catch(error){
        alert(error)
      }finally{
        setGeneratingImage(false)
      }
    }else{
      alert("pls enter a prompt")
    }
  };

  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  };
  const handleSurpriseMe = () => {
    const randomPrompts = getRandomPrompt(form.prompt)
    setForm({...form,prompt:randomPrompts})
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
              LabelName="Your name"
              type="text"
              name="name"
              placeholder="Your Name?"
              value={form.name}
              handleChange={handleChange}
            />
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
            <div className="relative mg-grey-50 border border-grey-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 p-3 justify-center items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-fit opacity-40"
                />
              )}
              {generatingImage && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loading />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImage}
              className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {generatingImage ? "Generating..." : "Generate"}
            </button>
          </div>
          <div className="mt-10">
            <p className="mt-2 text-[#666e75] text-[14px]">
              Share your image with the community
            </p>
            <button
              type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? "Sharing ..." : "Share"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default GenerateImage;
