import React from 'react';
import { CardBody } from 'react-bootstrap';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let imgSrc;

  if (type == 'Visa') {
    imgSrc = '/visa.png';
  } else if (type == 'Master Card') {
    imgSrc = '/master-card.svg';
  }

  const cardStyles = {
    backgroudColor: bgColor,
    color: color,
  };

  return (
    <div style={cardStyles} className="credit-card">
      <div className="header">
        <img src={imgSrc} />
      </div>
      <div className="number">{number}</div>
      <div className="info">
        <div className="top">
          <div className="expires">
            {expirationMonth}/{expirationYear}
          </div>
          <div className="bank">{bank}</div>
        </div>
        <div className="bottom">{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
