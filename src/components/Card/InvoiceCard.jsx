import React from "react";
import { Card } from "antd";

import { useNavigate } from "react-router-dom";

const InvoiceCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
  <Card
    onClick={() => {
      window.scrollTo(0, 0);
      navigate(`/my-invoices/${item.id}/details`);
    }}
    hoverable
    style={{
      width: 240,
    }}
    bodyStyle={{ padding: 0 }}
    cover={<img alt="example" src={item.imageUrl} />}
  ></Card>
</div>
  );
};

export default InvoiceCard;
