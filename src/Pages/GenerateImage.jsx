import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../Components/FormField'
import Loading from '../Components/Loading'
import {getRandomPrompt} from '../Utils/randomPrompts'

function GenerateImage() {
    const navigate = useNavigate()
    const [form,setForm] = useState({
        name:"",
        prompt:"",
        image:"",
    });
    const [generatingImage,setGeneratingImage]= useState(false);
    const [loading,setLoading] = useState(false);


 const handleSubmit =() =>{

 }
 const handleChange = (e)=>{

 }
 const handleSurpriseMe =()=>{
    
 }

  return (
 <>
 <section className='max-w-7xl mx-auto'>
 <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Generate Image</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
               Create Imaginative and visually stunning images through Pixate and share them with the community 
            </p>
        </div>
        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
            <div className=' flex flex-col gap-5'>
                <FormField 
                LabelName = " Your name"
                type="text"
                name="name"
                Placeholder="Your Name ? "
                value={form.name}
                handleChange={handleChange}
                ></FormField>
                   <FormField 
                LabelName = "Prompt"
                type="text"
                name="prompt"
                Placeholder="    '3D render of a cute tropical fish in an aquarium on a dark blue background, digital art',
                "
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handlesurpriseMe={handleSurpriseMe}
                ></FormField>
            </div>
        </form>
 </section>

 </>
  )
}

export default GenerateImage