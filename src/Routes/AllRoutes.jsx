import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Pages/Main';
import GenerateImage from '../Pages/GenerateImage';

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pixate" element={<Main/>}></Route>
        <Route path="/generateImage" element={<GenerateImage/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes