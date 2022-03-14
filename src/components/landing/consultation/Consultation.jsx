import React, { useState } from "react";
import { Button, Col, Row, Input } from "antd";

import "./consultation.scss";
import ChecIcon from "../../../assets/images/landing/Success.png";

const Consultation = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [interesting, setInteresting] = useState("");
  const handleChange = (e, field) => {
    if (field === "name") {
      setName(e.target.value);
    }
    if (field === "tel") {
      setTel(e.target.value);
    }
    if (field === "interesting") {
      setInteresting(e.target.value);
    }
  };
  return (
    <div className="consultation">
      <div className="container">
        <Row className="consultation__content">
          <Col span={16} className="consultation__left">
            <h3 className="section-title">Сколько стоят услуги</h3>
            <p className="consultation__description">
              Цена рассчитывается индивидуально в зависимости отсложности,
              объема и сроков работы.
            </p>
            <p className="consultation__description">
              Разработчик оценивает временные затраты по проекту, а аналитики
              устанавливают стоимость продукта.
            </p>
          </Col>
          <Col span={8} className="consultation__right">
            {activeStep === 1 ? (
              <div className="consultation__right-step1">
                <h6 className="consultation__right-title">
                  Получить бесплатную консультацию
                </h6>
                <p className="consultation__right-subtitle">
                  В рамках консультации уточним необходимую информацию для
                  анализа вашего проекта
                </p>
                <div className="consultation__right-button">
                  <Button onClick={() => setActiveStep(2)}>Получить</Button>
                </div>
              </div>
            ) : activeStep === 2 ? (
              <div className="consultation__right-step2">
                <form action="" className="form">
                  <div className="form__item">
                    <Input
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => handleChange(e, "name")}
                    />
                  </div>
                  <div className="form__item">
                    <Input
                      placeholder="номер телефона"
                      value={tel}
                      onChange={(e) => handleChange(e, "tel")}
                    />
                  </div>
                  <div className="form__item">
                    <Input
                      placeholder="какая из услуг вас заинтересовала ?"
                      value={interesting}
                      onChange={(e) => handleChange(e, "interesting")}
                    />
                  </div>
                </form>
                <div className="consultation__right-button">
                  <Button
                    onClick={() => setActiveStep(3)}
                    disabled={
                      name.length !== 0 &&
                      tel.length !== 0 &&
                      interesting.length !== 0
                        ? false
                        : true
                    }
                  >
                    Получить
                  </Button>
                </div>
              </div>
            ) : (
              <div className="consultation__right-step3">
                <div className="consultation__right-success">
                  <img src={ChecIcon} alt="icons" />
                </div>
                <h6 className="consultation__right-title">
                  Cпасибо за вашу заявку!
                </h6>
                <p className="consultation__right-subtitle">
                  Наш менеджер свяжется с вами в течении 3-ех часов
                </p>
                <div className="consultation__right-button success">
                  <Button>отправлено</Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Consultation;
