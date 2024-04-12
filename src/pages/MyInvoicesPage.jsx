import React, { useEffect } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";
import InvoiceCard from "../components/Card/InvoiceCard";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { GetOrders } from "../redux/actions/OrderActions";
const MyInvoicesPage = () => {
  const { t } = useTranslation();
  const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetOrders())
  }, [dispatch])
  

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
          <div className="d-flex justify-content-around  gap-y-4 flex-wrap ">
          {order.success && order.orders.data.map((item) => (
            <InvoiceCard item={item}/>      
          ))}   
          </div>
           
        </div>
      </div>
    </MainLayout>
  );
};

export default MyInvoicesPage;
