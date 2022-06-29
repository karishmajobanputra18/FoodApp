import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'; 
function VegetarianRecipes(){
    const [vegetarian,setVegetarian]=useState([]);
    useEffect(()=>{
       getVegetarian();
    },[]);
    const getVegetarian = async()=>{
        const check=localStorage.getItem('vegetarian');
        if(check){
            setVegetarian(JSON.parse(check));

        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=6b5780a445454adebee9acd4cb44c625&number=24`);
            const data = await api.json();
            localStorage.setItem('vegetarian',JSON.stringify(data.recipes))
            setVegetarian(data.recipes);
            console.log(data.recipes);
        }
        
     
        

    };
     
    
return ( 
 <div> 
      
    <Container> 
           
            <Splide options={{
                perPage:5,
                pagination:false,
                drag:'free',
                gap:"5px",
            }}>
            {vegetarian.map((recipe)=>{
            return(
            <SplideSlide>
            <Card>
            <Link to={'/recipe/'+ recipe.id }>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}/>
             <Gradient/>   
             </Link>
            </Card>
            </SplideSlide>
            ); 
          })}
        </Splide>
    </Container>    
</div> 
  );

}

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:20px;

`;



const Card = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
min-height:10rem;
border-radius:2rem; 
overflow:hidden;
position:relative;
font-family:serif;
font-weight:800;

 
img{
    max-width:100%;
    max-height:100%;
    padding:10px;
    border-radius:2rem;
    object-fit:cover;
   
    
}
p{
    position:absolute;
    z-index:10;
    padding:10px;
    left:50%;
    bottom:20%;
    transform:translate(-50%,0%);
    width:100%;
    text-align:center;
    color:beige;
    display:flex;
    justify-content:center;
    align-items:center;
    text-shadow:
   -0.5px -0.5px 0 #000,  
    0.5px -0.5px 0 #000,
    -0.5px 0.5px 0 #000,
     0.5px 0.5px 0 #000;
    

}
`;
const Gradient = styled.div `
z-index: 3;
position:absolute;
width:100%;
height:100%; 
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`; 



export default VegetarianRecipes;