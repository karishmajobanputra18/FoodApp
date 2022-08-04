import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, Link, useParams } from "react-router-dom"; // useParams allows us to get the keyword from the url

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6b5780a445454adebee9acd4cb44c625&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Link>
            <Gradient />
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  animate=opacity: 1;
  initial=opacity: 0;
  exit=opacity: 0;
  transition=opacity: 1;
  padding: 0.5rem;
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //min-height:10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  font-family: serif;
  font-weight: 800;

  img {
    max-width: 100%;
    max-height: 100%;
    padding: 10px;
    border-radius: 2rem;
    object-fit: cover;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    //padding:10px;
    left: 50%;
    //bottom:10%;

    //transform:translate(50%,-100%);
    width: 100%;
    text-align: center;
    color: beige;

    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  // width:100%;
  // height:100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Cuisine;
