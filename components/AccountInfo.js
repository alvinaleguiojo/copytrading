"use client";
import { useContext } from "react";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { OnOrderProfitProvider } from "../context/OnOrderProfitContext";

function AccountInfo() {
  const [loading, setLoading] = useState(true);
  const [tradingAccountInfo, setTradingAccountInfo] = useState({});

  let accountBalance = tradingAccountInfo.balance | 0;
  let accountEquity = tradingAccountInfo.equity | 0;
  let formattedaccountBalance = "$" + accountBalance?.toLocaleString();
  let formattedaccountEquity = "$" + accountEquity?.toLocaleString();

  //   convertedtotalFloatingProfit = convertedtotalFloatingProfit;
  let convertedtotalFloatingProfit =
    typeof tradingAccountInfo?.profit === "undefined"
      ? "0"
      : "$" + tradingAccountInfo.profit.toString().slice(0, 5);

  useEffect(() => {
    // Create a WebSocket client and connect to the URL
    const socket = new WebSocket(
      "wss://mt4.mtapi.be/OnOrderProfit?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0"
    );

    //wss://mt4.mtapi.be/OnOrderProfit?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0
    //mt4.mtapi.be/OnTickValue?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      setLoading(false);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const { data: accountInfo } = data;
      setTradingAccountInfo(accountInfo);
      // Update UI or perform actions based on the received data
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, []);

  if (loading) {
    <Skeleton />;
  }

  return (
    <div>
      <p>Balance: {formattedaccountBalance}</p>
      <p>Equity: {formattedaccountEquity}</p>
      <p>P/L: {convertedtotalFloatingProfit}</p>
    </div>
  );
}

export default AccountInfo;
