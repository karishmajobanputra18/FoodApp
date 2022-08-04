import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        {/* when the search is implemented save it as input  */}
        <FaSearch className="searchIcon"></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  @media (min-width: 768px) {
    margin: 0rem 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      position: relative;
    }
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.5rem;
      color: white;
      padding: 0.2rem 2rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    //margin:0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 20rem;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 100%;
      position: relative;
    }
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size: 1.5rem;
      color: white;
      padding: 0.5rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      max-width: 100%;
    }
  }
  @media (max-width: 400px) {
    //margin:10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .searchIcon {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1rem;
  }
`;
export default Search;
