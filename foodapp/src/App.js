
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
       <Link to={"/"}> <GiFoodTruck/><h3>Food Truck</h3></Link> 
        <Search/> 
      </Nav>
        <Categories/>
       <Pages/>
       </BrowserRouter> 
    </div>
  );
}

const Logo = styled(Link)
`
text-decoration:none;
position:relative;
font-size:10px;
font-weight:400;
font-family:'Lobster Two',cursive;

`


const Nav= styled.div`
display:flex;

align-items:center;
svg{
  justify-content:flex-start;
  font-size:4rem;
  color:#bd0025;
  margin:1rem 1rem;
}
h3{
  text-decoration:none;
  // transform:translate(100%,-200%);
  color:#bd0025;
 }
 
`



export default App;
