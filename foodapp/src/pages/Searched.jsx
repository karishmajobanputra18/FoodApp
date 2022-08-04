import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SplideSlide } from "@splidejs/react-splide";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=6b5780a445454adebee9acd4cb44c625&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10rem;
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
    position: absolute;
    z-index: 10;
    padding: 10px;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    color: beige;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Searched;
