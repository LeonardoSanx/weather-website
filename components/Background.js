// import BackgroundStyles from "../styles/Background.module.css";
import { useState, useEffect } from "react";

const Background = ({ day, imageText }) => {
  return <img src={`images/${day}/${imageText}.jpg`} />;
};

export default Background;
