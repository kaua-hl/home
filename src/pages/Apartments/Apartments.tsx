import React from "react";
import styles from "./Apartments.module.css";
import ApartmentCard from "../../components/ApartmentCard/ApartmentCard";
import LayoutDefault from "../../layouts/LayoutDefault";

const Apartments = () => {
  return (
    <LayoutDefault>
      <section className={`${styles.apartments} container`}>
        <h1 className="subtitle">Pesquisar Apartamentos:</h1>
        <form className={styles.apartmentsFilter}>
          <div>
            <label htmlFor="location">Estado</label>
            <select name="location" id="location">
              <option>São Paulo</option>
              <option>Curitiba</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Preço</label>
            <select name="location" id="location">
              <option>R$ 0 à R$ 500, 00</option>
              <option>R$ 600, 00 à R$ 1000, 00</option>
              <option>R$ 1100, 00, 00 à R$ 1500, 00</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Quartos</label>
            <select name="location" id="location">
              <option>1 Quarto</option>
              <option>2 Quartos</option>
              <option>3 Quartos</option>
            </select>
          </div>
          <div>
            <label htmlFor="location">Banheiros</label>
            <select name="location" id="location">
              <option>1 Banheiro</option>
              <option>2 Banheiros</option>
              <option>3 Banheiros</option>
              <option>4 Banheiros</option>
            </select>
          </div>
          <button>Pesquisar</button>
        </form>
        <div className={styles.apartmentsContent}>
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
          <ApartmentCard />
        </div>
      </section>
    </LayoutDefault>
  );
};

export default Apartments;
