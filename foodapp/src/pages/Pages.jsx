import * as React from 'react';
import Home from './Homepage' ;
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes} from "react-router-dom";


function Pages() {
  return (
    <div>
      
        <Routes>
        {/* <-- define multiple route components to take you to different pages--> */}
        <Route path="/" element={<Home/>}/> 
        <Route path="/Cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/> 
        <Route path ="/recipe/:name" element={<Recipe/>}/>
        </Routes>
       
    </div>  
  )
}

export default Pages;   