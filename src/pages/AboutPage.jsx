import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl py-3 sm:py-5 lg:py-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("aboutPage.header")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          {t("aboutPage.description")}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;