"use client";
import React from "react";
import useOpenTrades from "../hooks/useOpenTrade";
import OrderCard from "./OrderCard";
import { Empty } from "antd";

function OrderCards({ config }) {
  const [reload, setReload] = React.useState(false);
  const { data = [] } = useOpenTrades(reload);

  if (data.length === 0) {
    return <Empty description={<p>No open trades</p>} />;
  }
  return (
    <div>
      {data?.map((order, index) => (
        <OrderCard
          order={order}
          key={index}
          setReload={setReload}
          config={config}
        />
      ))}
    </div>
  );
}

export default OrderCards;
