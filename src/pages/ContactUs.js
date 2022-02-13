import React from "react";
//Styled components
import styled from "styled-components";
//Animation
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.h1
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      Contact us
    </motion.h1>
  );
};

export default ContactUs;
