import { Col, Row } from "antd";
import React from "react";
import ServiceItem from "./service-item/ServiceItem";
import "./service.scss";
const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <h3 className="section-title">Услуги</h3>
        <Row justify="space-between">
          <Col span={7}>
            <ServiceItem title="Разработка сайтов" />
          </Col>
          <Col span={7}>
            <ServiceItem title="Мобильные приложения" />
          </Col>
          <Col span={7}>
            <ServiceItem title="Маркетинг продвижение" />
          </Col>
          <Col span={7}>
            <ServiceItem title="SMM-продвижение" />
          </Col>
          <Col span={7}>
            <ServiceItem title="SEO - оптимизация" />
          </Col>
          <Col span={7}>
            <ServiceItem title="Брендинг и айдентика" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Service;
