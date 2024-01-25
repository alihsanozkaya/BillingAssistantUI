import React, { Fragment } from "react";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <div className="bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        {children}
      </div>
      <MainFooter />
    </Fragment>
  );
};

export default MainLayout;
