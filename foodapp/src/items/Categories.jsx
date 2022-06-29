import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import{GiNoodles,GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

 
function categories() {
  return (
    <List>
       <Link to={'/cuisine/Italian'}>
        <Button variant="contained">
            <FaPizzaSlice/>
            <h4>Italian Food</h4>

        </Button>
        </Link>
        <Link to={'/cuisine/American'}>
        <Button variant="contained" >
            <FaHamburger/>
            <h4>American Food</h4>
        </Button>
        </Link>
        <Link to={'/cuisine/Thai'}>
        <Button variant="contained">
            <GiNoodles/>
            <h4>Thai Food</h4>
        </Button>
        </Link>
        <Link to={'/cuisine/Japanese'}>
        <Button variant="contained">
            <GiChopsticks/>
            <h4>Japanese Food</h4>
        </Button>
        </Link>
       
        </List>  
  )
}
const List = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;

margin:2rem 2rem;
gap:10px;
padding-left:30rem;
padding-right:30rem;


Button{
    width:10rem;
    background: linear-gradient(45deg,#bd0025,#FF0000);
    h4{
        color:white;
    }
    svg{
        color:white;
        gap:2px;
    }
`;
// const Link=styled(NavLink)`
// display:flex;
// flex-direction:column;
// justify-content:center; 
// align-items:center;
// border-radius:50%;
// margin-right:2rem;
// text-decoration:none;
// background: linear-gradient(35deg,#bd0025,#313131);
// width:6rem;
// height:6rem;
// cursor:pointer;
// transform:scale(0.8);

// h4{
//     color:white;
//     font-size:0.8rem;
// }
// svg{
//     color:white;
//     font-size:1.5rem;
// }
// &.active{
//     background:linear-gradient(to right,#f27121,#e94057);
// }
// svg{
//     color:white;
// }
// h4{
//     color:white;
// }
// }
// `;



export default categories;