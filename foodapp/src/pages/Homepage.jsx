import VegetarianRecipes from "../items/VegetarianRecipes";
import PopularRecipes from "../items/PopularRecipes";
import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';

function Home() {
  return (
   // <motion.div>
        <MainPage>
        <h3>Popular Recipes</h3>
        <PopularRecipes/>
        <h3>Vegetarian Recipes</h3>
        <VegetarianRecipes/>
        
        </MainPage>
   // </motion.div>
    
  )
}
const MainPage=styled.div`
display:flex;
justify-content:center;
align-items:center;

h3{
    display:flex;
    justify-content:center;
    align-items:center;
}
    @media (max-width: 767px) {
        
        justify-content:center;
        align-items:center;
      }
      @media (max-width: 400px) {
        
        justify-content:center;
        align-items:center;
      }
}
`
export default Home;