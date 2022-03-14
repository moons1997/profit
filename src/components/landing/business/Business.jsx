import { Col, Row } from "antd";
import React from "react";
import "./business.scss";
import CheckPng from "../../../assets/images/landing/check.png";
const BusinessItem = ({ title }) => {
  return (
    <div className="business__item">
      <img src={CheckPng} alt="images" className="business__item-icon" />
      <h5 className="business__item-title">{title}</h5>
    </div>
  );
};
const Business = () => {
  return (
    <div className="business">
      <div className="container">
        <h3 className="section-title">
          <span>Что даст вашему бизнесу</span>
          <br />
          внедрение Digital-инструментов
        </h3>
        <Row gutter={24} justify="center">
          <Col span={7}>
            <BusinessItem title="Автоматизация бизнес-процессов" />
          </Col>
          <Col span={7}>
            <BusinessItem title="Привлечение новых клиентов" />
          </Col>
          <Col span={7}>
            <BusinessItem title="Увеличение прибыли" />
          </Col>
          <Col span={7}>
            <BusinessItem title="Ускорение принятия решений" />
          </Col>
          <Col span={7}>
            <BusinessItem title="Рост эффективности" />
          </Col>
          <Col span={7}>
            <BusinessItem title="Повышение лояльности" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Business;
