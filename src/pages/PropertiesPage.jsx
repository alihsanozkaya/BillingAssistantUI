import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const PropertiesPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl py-3 sm:py-4 lg:py-6">
        <div className="text-center mx-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
          {t("propertiesPage.header")}
          </h1>
          <div className="text-left sm:pl-4">
            <p className="text-lg leading-8 text-gray-600 mb-4">
            {t("propertiesPage.description1")}
            </p>
            <ul className="list-disc leading-6 list-inside mb-4">
              <li>
            {t("propertiesPage.li1")}  
              </li>
              <li>
            {t("propertiesPage.li2")}  
              </li>
              <li>
              {t("propertiesPage.li3")}                  
              </li>
              <li>
            {t("propertiesPage.li4")}
              </li>
            </ul>
            <p className="text-lg leading-8 text-gray-600 mb-4">
            {t("propertiesPage.description2")}
            </p>
            <p className="text-lg leading-8 text-gray-600">
            {t("propertiesPage.description3")}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertiesPage;