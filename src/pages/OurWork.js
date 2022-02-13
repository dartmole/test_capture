import React, { useState } from "react";
//Styled components
import styled from "styled-components";
//Router
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { MovieState } from "../MovieState";
//Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const OurWork = () => {
  const movies = MovieState();

  return (
    <Work
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {movies.map((movie) => {
        return (
          <Movie key={movie.id}>
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <Link to={movie.url}>
              <img src={movie.mainImg} alt={movie.title} />
            </Link>
          </Movie>
        );
      })}
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
