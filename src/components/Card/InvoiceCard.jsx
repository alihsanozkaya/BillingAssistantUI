import React from "react";
import { Card } from "antd";

import { Navigate, useNavigate } from "react-router-dom";
const { Meta } = Card;

const InvoiceCard = ({item}) => {

  const navigate = useNavigate()
  return (
<div style={{ display: "flex", justifyContent: "space-around" }}>
    <Card
      onClick={() => navigate(`/my-invoices/${item.id}/details`)}
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src={item.imageUrl}
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
   
  </div>
  )
}
  

export default InvoiceCard;
