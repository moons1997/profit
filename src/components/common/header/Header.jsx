import React from "react";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

import Logo from "../../../assets/images/common/profit-logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Row align="middle">
          <Col className="gutter-row" span={2}>
            <div className="header__logo">
              <img src={Logo} alt="logo" />
            </div>
          </Col>
          <Col className="gutter-row " span={22}>
            <ul className="navbar">
              <li className="navbar_item">
                <NavLink to="/">Услуги</NavLink>
              </li>
              <li className="navbar_item">
                <NavLink to="/a">Как мы работаем</NavLink>
              </li>
              <li className="navbar_item">
                <NavLink to="/b">Результат</NavLink>
              </li>
              <li className="navbar_item">
                <NavLink to="/c">Заказать</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
