import React from "react";
// import { Button } from "antd";
import Phone from "../../../assets/images/landing/Group 112.png";

import "./hero.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="page-title">
          Разаработка сайтов и мобильных приложений
        </h1>
        <h2 className="sub-title">
          Помогаем бизнесу увеличить прибыль с помощью digital-инструментов
        </h2>
        <div className="hero-button">
          <Link to="/">Обсудить проект</Link>
        </div>
        <div className="hero-phones">
          <img src={Phone} alt="phones" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
