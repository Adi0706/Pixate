import { Suspense } from 'react' 
import {Canvas} from '@react-three/fiber'
import Loader from '../Components/Loader'

function Home() {
  return (
    <>
    <section className='w-full h-screen border border-solid border-black'>
        <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near:0.1,far:1000}}
        >
<Suspense fallback={<Loader/>}/>

        </Canvas>
    </section>
    </>
  )
}

export default Home