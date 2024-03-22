import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const PrivacyPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl py-3 sm:py-5 lg:py-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("privacyPage.mainHeader")}
          </h1>
        </div>
        <ul className="mt-6 text-md leading-6">
          <p>
            <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header1")}
              {": "}
            </h2>
            <span>{t("privacyPage.description1")}</span>
          </p>
          <p>
          <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header2")}
              {": "}
            </h2>
            <span>{t("privacyPage.description2")}</span>
          </p>
          <p>
          <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header3")}
              {": "}
            </h2>
            <span>{t("privacyPage.description3")}</span>
          </p>
          <p>
          <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header4")}
              {": "}
            </h2>
            <span>{t("privacyPage.description4")}</span>
          </p>
          <p>
          <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header5")}
              {": "}
            </h2>
            <span>{t("privacyPage.description5")}</span>
          </p>
          <p>
          <h2 style={{fontWeight: "bold"}}>
              {t("privacyPage.header6")}
              {": "}
            </h2>
            <span>{t("privacyPage.description6")}</span>
          </p>
        </ul>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;