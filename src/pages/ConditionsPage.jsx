import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";

const ConditionsPage = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl py-3 sm:py-5 lg:py-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("conditionsPage.header")}
          </h1>
        </div>
        <ul className="mt-6 text-md leading-6">
          <p>
            <strong>
              {t("conditionsPage.condition1")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description1")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition2")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description2")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition3")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description3")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition4")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description4")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition5")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description5")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition6")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description6")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition7")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description7")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition8")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description8")}</span>
          </p>
          <p>
            <strong>
              {t("conditionsPage.condition9")}
              {": "}
            </strong>
            <span>{t("conditionsPage.description9")}</span>
          </p>
        </ul>
      </div>
    </MainLayout>
  );
};

export default ConditionsPage;