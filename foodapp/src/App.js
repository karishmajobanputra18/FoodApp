
import Pages from "./pages/Pages";
import Categories from "./items/Categories";
import {BrowserRouter} from 'react-router-dom';
import Search from "./items/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiFoodTruck} from "react-icons/gi";
import { FaSearch } from "react-icons/fa";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav>
       <Link to={"/"}> <img className="ftlogo" src="../images/food-truck.png" alt="FTLogo"/></Link><h3>Food Truck</h3>
        <Search/> 
      </Nav>
        <Categories/>
       <Pages/>
       </BrowserRouter> 
       
    </div>
  );
}


const Nav= styled.div`

h3{
  font-family: 'Splash', cursive;
  font-size:25px;
  display:flex;
  text-decoration:none;
  margin-left:15px;
  color:#bd0025;
  
  align-items:center;
  
 }
 
img{
transform:translate(50% );
// margin:15px;
 display:flex;
 justify-content:flex-start;
  width:50px;
  height:50px
  
}
`



export default App;
