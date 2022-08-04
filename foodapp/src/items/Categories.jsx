import { FaPizzaSlice, FaHamburger, FaRProject } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { ChakraProvider } from "@chakra-ui/react";
import { MenuItem } from "@mui/material";

function categories() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <Button variant="outlined">
          <h4>Italian Food</h4>
        </Button>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <Button variant="outlined">
          <h4>American Food</h4>
        </Button>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <Button variant="outlined">
          <h4>Thai Food</h4>
        </Button>
      </NavLink>
      <NavLink to={"/cuisine/Spanish"}>
        <Button variant="outlined">
          <h4>Spanish Food</h4>
        </Button>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  gap: 10px;
  text-decoration: none;

  Button {
    //background: linear-gradient(45deg,#bd0025,#FF0000);
    color: red;
    border-color: red;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    gap: 10px;
    flex-direction: column;
    Button {
      text-decoration: none;
      width: 7rem;

      h4 {
        font-size: 10px;
        color: red;
      }
      svg {
        color: white;
        gap: 2px;
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 10px;
  }
`;

export default categories;
