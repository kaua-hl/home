import React, { ReactElement } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// const LayoutDefault = ({ children }: { children: React.ReactElement }) => {
const LayoutDefault = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutDefault;
