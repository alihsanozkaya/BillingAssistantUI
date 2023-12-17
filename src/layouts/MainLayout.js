import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />

      {children}

      <MainFooter />
    </Fragment>
  );
};

export default MainLayout;
