import React from "react";
import "./styles/Cards.css";

const InfoCard = ({ title, icon, value, isExpense }) => {
  return (
    <div className="info-card-container">
      <div className="title">{title}</div>
      <div className="info">
        <div className={`value ${isExpense ? 'expense' : ''}`}>${value}</div>
        <div className={`icon ${isExpense ? 'expense' : ''}`}>{icon}</div>
      </div>
    </div>
  );
};

export default InfoCard;
