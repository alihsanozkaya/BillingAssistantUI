import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";
import InvoiceCard from "../components/Card/InvoiceCard";
import { Link } from "react-router-dom";

const MyBillsPage = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl py-3 sm:py-5 lg:py-5">
        <div className="d-inline p-2 focus:border-indigo-900 shadow-sm rounded-lg">
          <Link to="/upload-invoice" className="hover:no-underline">
            <div className="d-inline text-3xl me-5;">{t("myInvoicesPage.upload")}</div>
            <PlusSquareOutlined className="text-3xl text-success ms-3" />
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("myInvoicesPage.header")}
          </h1>
          <InvoiceCard/>          
        </div>
      </div>
    </MainLayout>
  );
};

export default MyBillsPage;
