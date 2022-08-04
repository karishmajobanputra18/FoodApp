import VegetarianRecipes from "../items/VegetarianRecipes";
import PopularRecipes from "../items/PopularRecipes";
import QuickBites from "../items/QuickBites";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  return (
    // <motion.div>
    <MainPage>
      {/* add quick snacks  */}
      <h3>Popular Recipes</h3>
      <PopularRecipes />
      <h3>Vegetarian Recipes</h3>
      <VegetarianRecipes />
      <h3>Quick Bites</h3>
      <QuickBites />
    </MainPage>
    // </motion.div>
  );
}
const MainPage = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;


h3{
    display:flex;
    justify-content:center;
    align-items:center;
}
    @media (max-width: 767px) {
      display:flex;
        font-size:15px;
        justify-content:center;
        align-items:center;
        margin:5px;
        padding:5px;
        
      }
      @media (max-width: 480px) {
        display:flex;
        font-size:10px;
        justify-content:center;
        align-items:center;
        margin:5px;
        padding:5px;
      }
}
`;
export default Home;
