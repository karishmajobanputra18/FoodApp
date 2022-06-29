import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams} from "react-router-dom";
import React from 'react'

function Recipe() {
    let params = useParams();
    const [details,setDetails]=useState({});
    const [activeTab, setActiveTab]=useState('method');
    const fetchDetails = async()=>{
        const data = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=6b5780a445454adebee9acd4cb44c625`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
        };
        useEffect(() => {
            fetchDetails();
            console.log(fetchDetails);
        },[params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
            </div>
            <Info>
            <Button className={activeTab==="method"?"active":""} onClick={()=> setActiveTab("method")}>Method</Button>    
            <Button className={activeTab==="ingredients"?"active":""} onClick={()=> setActiveTab("ingredients")}>Ingredients</Button>  
            {activeTab==="method"&&(
                <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                <h3 dangerouslySetInnerHTML= {{__html:details.method}}></h3>
                </div>
            )}
            {activeTab==='ingredients'&&(
                <ul>
                    {details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
                
            )} 
            
            </Info>        
        </DetailWrapper>
  ) 
}
const DetailWrapper= styled.div`
margin:5rem;
display:flex;
.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}
h2{
    margin-bottom:2rem;
}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;
}

`
const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`
const Info = styled.div`
margin-left:10rem;
margin-right:10rem;
align-items:center;
line-height:1.5;
`

export default Recipe