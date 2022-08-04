import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from "react";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("method");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=6b5780a445454adebee9acd4cb44c625`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "method" ? "active" : ""}
          onClick={() => setActiveTab("method")}
        >
          Method
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "method" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.method }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  //min-height:10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  font-family: serif;
  font-weight: 800;
  .active {
    background: linear-gradient(35deg, #ff0000, #bd0025);
    color: white;
  }
  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid white;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin: 3rem;
  align-items: center;
  line-height: 2;
`;

export default Recipe;
