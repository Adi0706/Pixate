import { useEffect } from 'react'
import React ,{useState}from 'react'
import Header from '../Components/Header'
import FormField from '../Components/FormField';
import Loading from '../Components/Loading'
import Card from '../Components/Card'


const IamgeCard =({data,title}) =>{
    if(data?.length > 0) { 
        return data.map((image)=> <Card key={image.id} {...image} /> )
}
return (
    <h2 className='mt-5 font-bold text-[#6449ff] uppercase'>
        {title}
    </h2>
)
}

function Main() {
    const [loading,seLoading] = useState(false) ; 
    const [searchText,setSearchText] = useState('')
    const [allPosts,setAllPosts] = useState(null)
  return (
    <>
    <Header/>
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Showcase</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                Browse throught collection of imaginative and visually stunning images generated using Pixate.
            </p>
        </div>
        <div className='mt-16'>
            <FormField/>
        </div>
        <div className='mt-10'>
            { loading ? (
                <div className='flex justify-center items-center'>
                    <Loading/>
                    </div>
            ):<>
            {searchText && (
                <h2 className='font-medium text=[#666e75] text-xl mb-3'>
                    Showing results for <span className='text-[##222328]'>{searchText}</span>
                </h2>

            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                 { searchText ?(
                    <IamgeCard data={[]} title="No search results found"/>
                 ):(
                    <IamgeCard data={[]} title="no posts found"/>
                 )}
            </div>
            </>}
        </div>
    </section>
    </>
  )
}

export default Main