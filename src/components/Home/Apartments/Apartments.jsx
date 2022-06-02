import React from "react";
import styles from "./Apartments.module.css";
import ApartmentCard from "../../ApartmentCard/ApartmentCard";

const Apartments = () => {
  return (
    <section className={`${styles.apartments} container`}>
      <h2 className="subtitle">Destaques</h2>
      <div className={styles.apartments__list}>
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </div>
    </section>
  );
};

export default Apartments;
