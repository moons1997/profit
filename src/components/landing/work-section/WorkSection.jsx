import { Col, Row } from "antd";
import React from "react";
import "./work-section.scss";
import Icon1 from "../../../assets/images/landing/icon_1.png";
import Icon2 from "../../../assets/images/landing/icon_2.png";
import Icon3 from "../../../assets/images/landing/icon_3.png";
import Icon4 from "../../../assets/images/landing/icon_4.png";
import Icon5 from "../../../assets/images/landing/icon_5.png";
import Icon6 from "../../../assets/images/landing/icon_6.png";

const Icons = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  icon4: Icon4,
  icon5: Icon5,
  icon6: Icon6,
};
const WorkItem = ({ icon, desc }) => {
  return (
    <div className="work-section__item">
      <div className="work-section__icon">
        <img src={icon} alt={desc} />
      </div>
      <h6 className="work-section__description">{desc}</h6>
    </div>
  );
};

const WorkSection = () => {
  return (
    <div className="work-section">
      <div className="container">
        <h3 className="section-title">Как мы работаем </h3>
        <Row className="work-section__content" gutter={16}>
          <Col span={12}>
            <WorkItem
              icon={Icons.icon1}
              desc="Исследование ниши и стратегия развития"
            />
          </Col>

          <Col span={12}>
            <WorkItem
              icon={Icons.icon2}
              desc="Прототипирование UI | UX дизайна для продукта"
            />
          </Col>

          <Col span={12}>
            <WorkItem
              icon={Icons.icon3}
              desc="Анализ конкурентов и юзабилити тесты"
            />
          </Col>
          <Col span={12}>
            <WorkItem icon={Icons.icon4} desc="Разработка и верстка" />
          </Col>
          <Col span={12}>
            <WorkItem
              icon={Icons.icon5}
              desc="Семантическая структура  и оптимизация"
            />
          </Col>
          <Col span={12}>
            <WorkItem
              icon={Icons.icon6}
              desc="Финальное тестирование и запуск продукта"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WorkSection;
