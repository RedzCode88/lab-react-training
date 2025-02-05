import React from 'react';
import styles from './IdCard.module.css';

function idCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className={styles.idCard}>

      <img src={picture} />

      <div className={styles.info}>

        <div><strong>First Name:</strong>{lastName}</div>
        <div><strong>Last Name:</strong>{firstName}</div>
        <div><strong>Género:</strong>{gender}</div>
        <div><strong>Altura:</strong>{height/100}m</div>
        <div><strong>Birth:</strong>{birth.toDateString()}</div>

      </div>
    </div>
  );
}

export default idCard;
