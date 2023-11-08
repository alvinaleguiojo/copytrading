"use client";
import { useEffect, useState } from "react";
import useOpenTrades from "../hooks/useOpenTrade";
import OrderCard from "./OrderCard";
import { Empty, Skeleton } from "antd";

function OrderCards({ config, data }) {
  // const [reload, setReload] = React.useState(false);
  // const { data, error, loading } = useOpenTrades(reload);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create a WebSocket client and connect to the URL
    const socket = new WebSocket(
      "wss://mt4.mtapi.be/OnOrderUpdate?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0"
    );

    //wss://mt4.mtapi.be/OnOrderProfit?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0
    //mt4.mtapi.be/OnTickValue?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      setLoading(false);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      console.log(data);

      const { data: opentrades } = data;
      // console.log([...orders, opentrades.orders]);
      setOrders(opentrades);
      // Update UI or perform actions based on the received data
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, [orders]);

  if (orders?.length === 0 && !loading) {
    return <Empty description={<p>No open trades</p>} />;
  }

  if (loading) {
    return <p style={{ color: "#fff" }}>loading....</p>;
  }

  return (
    <div>
      {orders?.map((order, index) => (
        <OrderCard
          order={order}
          key={index}
          // setReload={setReload}
          config={config}
        />
      ))}
    </div>
  );
}

export default OrderCards;
