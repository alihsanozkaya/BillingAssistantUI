import React, { useEffect, useState } from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import MainLayout from "../layouts/MainLayout";
import { useTranslation } from "react-i18next";
import InvoiceCard from "../components/Card/InvoiceCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetByUserId } from "../redux/actions/InvoiceActions";
import { GetProductsByUserId } from "../redux/actions/ProductActions";

const MyInvoicesPage = () => {
  const { t } = useTranslation();
  const invoice = useSelector((state) => state.invoice);
  const product = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  const [totalPrice, setTotalPrice] = useState(0);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(auth.user.id);

  useEffect(() => {
    setUserId(auth.user.id);
  }, [auth, auth.user.id]);

  useEffect(() => {
    if (auth.token && auth.user.id) {
      dispatch(GetByUserId(userId));
      dispatch(GetProductsByUserId(userId));
    }
  }, [dispatch, userId, auth, auth.user.id, auth.token]);

  useEffect(() => {
    if (product.success && product.products.data) {
      let total = 0;
      product.products.data.forEach((item) => {
        total += item.price;
      });
      setTotalPrice(total);
    }
  }, [product.success, product.products.data]);

  useEffect(() => {
    let start = 0;
    const increment = totalPrice / 50;

    const interval = setInterval(() => {
      start += increment;
      if (start >= totalPrice) {
        setAnimatedPrice(totalPrice.toFixed(2));
        clearInterval(interval);
      } else {
        setAnimatedPrice(start.toFixed(2));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [totalPrice]);

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl py-3 sm:py-5 lg:py-5">
        <div className="d-inline p-2 focus:border-indigo-900 shadow-sm rounded-lg">
          <Link to="/upload-invoice" className="hover:no-underline">
            <div className="d-inline text-3xl me-5;">
              {t("myInvoicesPage.upload")}
            </div>
            <PlusSquareOutlined className="text-3xl text-success ms-3" />
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl mt-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("myInvoicesPage.header")}
          </h1>
          <h2 className="text-left text-2xl mt-4 tracking-tight text-gray-900 sm:text-3xl">
            {t("myInvoicesPage.total")}: {animatedPrice} ₺
          </h2>
          <div className="d-flex justify-content-around gap-y-4 flex-wrap">
            {invoice.success &&
              invoice.invoices.data?.map((item, id) => (
                <InvoiceCard key={id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyInvoicesPage;
