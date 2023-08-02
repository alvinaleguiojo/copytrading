"use client";
import React from "react";
import useCloseDemoTrades from "../hooks/useCloseDemoTrades";
import OrderCard from "./OrderCard";
import { Empty } from "antd";

function CloseDemoTrades({ config }) {
  const [reload, setReload] = React.useState(false);
  const { data = [] } = useCloseDemoTrades(reload);

  if (data.length === 0) {
    return <Empty description={<p>No closed trades</p>} />;
  }
  return (
    <div>
      {data?.orders?.map((order, index) =>
        index !== 0 ? (
          <OrderCard
            close={true}
            order={order}
            key={index}
            setReload={setReload}
            config={config}
          />
        ) : null
      )}
    </div>
  );
}

export default CloseDemoTrades;
