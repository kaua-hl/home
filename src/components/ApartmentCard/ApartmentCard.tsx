import React from "react";
import styles from "./ApartmentCard.module.css";
import { ReactComponent as Bed } from "../../assets/icons/bed.svg";
import { ReactComponent as Bath } from "../../assets/icons/bath.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

const ApartmentCard = () => {
  return (
    <div className={styles.card}>
      <img src={require("../../assets/img/flat-1.png")} alt="Cards" />
      <div className={styles.card__content}>
        <div className="dp-flex">
          <h4>
            R$ 3000, 00
            <span>/ Mês</span>
          </h4>
          <Heart />
        </div>
        <h3>Legends Believe</h3>
        <span>777, Rua Passarinho, São Paulo</span>
        <div className={`${styles.card__specs} dp-flex`}>
          <div>
            <Bed />
            <span>1 quarto</span>
          </div>
          <div>
            <Bath />
            <span>1 banheiro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
