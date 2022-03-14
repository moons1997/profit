import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Услуги</NavLink>
          </li>
          <li>
            <NavLink to="/a">Как мы работаем</NavLink>
          </li>
          <li>
            <NavLink to="/b">Результат</NavLink>
          </li>
          <li>
            <NavLink to="/c">Заказать</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
