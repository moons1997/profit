import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./service-item.scss";
const ServiceItem = ({ title }) => {
  return (
    <div className="service-item">
      <h4 className="service-item__title">{title}</h4>
      <Link className="service-item__link" to="/">
        подробнее
      </Link>
    </div>
  );
};

export default ServiceItem;
