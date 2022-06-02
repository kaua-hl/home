import React from "react";
import styles from "./Features.module.css";
import { ReactComponent as Photo } from "../../../assets/icons/photo.svg";
import { ReactComponent as Security } from "../../../assets/icons/security.svg";
import { ReactComponent as Scheduling } from "../../../assets/icons/scheduling.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

const Features = () => {
  return (
    <section className={`${styles.features} container`}>
      <div className={styles.features__card}>
        <Photo />
        <h3>Fotos Profissionais</h3>
        <p>Fotos 100% profissionais do seu apartamento.</p>
      </div>
      <div className={styles.features__card}>
        <Security />
        <h3>Segurança</h3>
        <p>Segurança para encontrar seu apartamento.</p>
      </div>
      <div className={styles.features__card}>
        <Scheduling />
        <h3>Agendamento</h3>
        <p>Agende uma visita 100% Online no conforto de sua casa.</p>
      </div>
      <div className={styles.features__card}>
        <Plus />
        <h3>Mais de 2000</h3>
        <p>Apartamentos em sua localidade esperando por você.</p>
      </div>
    </section>
  );
};

export default Features;
