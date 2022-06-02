import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.banner} container dp-flex`}>
      <div className={styles.banner__content}>
        <h1>Encontre o apartamento perfeito para você.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <a href="#">Encontrar</a>
      </div>
      <img src={require("../../../assets/img/banner.jpg")} alt="" />
    </section>
  );
};

export default Banner;
