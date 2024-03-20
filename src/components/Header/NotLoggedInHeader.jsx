import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const NotLoggedInHeader = () => {
const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:justify-end ">
      <Link
        to="/login"
        className="-mx-3 text-lg font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
      >
        {t("global.login")}
      </Link>
      <Link
        to="/register"
        className="-mx-3 text-lg font-semibold leading-6 p-2 rounded-lg hover:no-underline hover:bg-white me-3"
      >
        {t("global.register")}
      </Link>
    </div>
  );
};
