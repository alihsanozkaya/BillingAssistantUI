import { Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import { GetByInvoiceId } from "../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const MyInvoiceDetailPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { loading, products } = useSelector((state) => state.product);
  const { invoiceId } = useParams();

  useEffect(() => {
    if (invoiceId) {
      dispatch(GetByInvoiceId(invoiceId));
    }
  }, [dispatch, invoiceId]);

  useEffect(() => {
    if (!loading && products.data) {
      setData(
        products.data.map((product) => ({
          key: product.id,
          name: product.name,
          unit: product.unit,
          price: product.price,
        }))
      );
    }
  }, [loading, products]);

  useEffect(() => {
    if (data.length > 0) {
      const total = data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [data]);

  const getFilters = (data) => {
    const filters = [];
    const uniqueValues = [...new Set(data.map((item) => item.name))];
    uniqueValues.forEach((value) => {
      filters.push({
        text: value,
        value: value,
      });
    });
    return filters;
  };

  const columns = [
    {
      title: t("MyInvoiceDetailPage.productName"),
      dataIndex: "name",
      filters: getFilters(data),
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: t("MyInvoiceDetailPage.productUnit"),
      dataIndex: "unit",
      sorter: (a, b) => a.unit - b.unit,
    },
    {
      title: t("MyInvoiceDetailPage.productPrice"),
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => <span>{price.toFixed(2)} ₺</span>,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const showTotal = (total, range) => {
    return (
      <div className="flex justify-start">
        <Link to="/my-invoices" className="mr-5 text-decoration-none">
          {t("MyInvoiceDetailPage.turnBack")}
        </Link>
        <span>{total} {t("MyInvoiceDetailPage.piece")}</span>
        <span className="ml-5">{t("MyInvoiceDetailPage.totalAmount")}: {totalPrice.toFixed(2)} ₺</span>
      </div>
    );
  };
  return (
    <MainLayout>
      <div className="flex justify-center mt-5">
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={{ showTotal }}
          style={{
            backgroundColor: "#C0C0C0",
            color: "green",
            outlineColor: "black",
            width: "50%",
          }}
        />
      </div>
    </MainLayout>
  );
};

export default MyInvoiceDetailPage;
