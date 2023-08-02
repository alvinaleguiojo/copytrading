"use client";
import React from "react";
import useLiveOpenTrade from "../hooks/useLiveOpenTrade";
import OrderCard from "./OrderCard";
import { Empty } from "antd";
import { config } from "../config/config";

function LiveOrderCards() {
  const [reload, setReload] = React.useState(false);
  const { data = [] } = useLiveOpenTrade(reload);

  if (data.length === 0) {
    return <Empty description={<p>No open trades</p>} />;
  }
  return (
    <div>
      {data?.map((order, index) => (
        <OrderCard
          config={config[1]}
          order={order}
          key={index}
          setReload={setReload}
        />
      ))}
    </div>
  );
}

export default LiveOrderCards;
