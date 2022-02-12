import React from "react";
import styled from "styled-components";
//Router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <SyledNav>
      <Link to="/" id="logo">
        Capture
      </Link>
      <ul>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/work">Our work</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </SyledNav>
  );
};

const SyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-family: "Monoton", cursive;
    font-size: 2rem;
  }
`;

export default Nav;
