"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { Typography, Input, Select, message } from "antd";

function AddAccount({ account }) {
  const [symbol, setSymbol] = useState("AUDUSD");
  const [volume, setVolume] = useState(0.01);

  async function handleBuyOrder(operation) {
    try {
      message.loading("Pending order", 0);
      const res = await fetch(
        `https://mt5.mtapi.be/OrderSend?id=${account.AccountID}&symbol=${symbol}&operation=${operation}&volume=${volume}&placedType=Web`
      );
      const data = await res.json();
      message.destroy();

      if ((await data.code) == "INVALID_VOLUME") {
        return message.error("Invalid Lotsize");
      }
      message.success("Oder has been placed successfully");
    } catch (error) {
      message.destroy();
      message.error(error.message);
    }
  }

  async function handleSellOrder(operation) {
    try {
      message.loading("Pending order", 0);
      const res = await fetch(
        `https://mt5.mtapi.be/OrderSend?id=${account.AccountID}&symbol=${symbol}&operation=${operation}&volume=${volume}&placedType=Web`
      );
      const data = await res.json();
      message.destroy();

      if ((await data.code) == "INVALID_VOLUME") {
        return message.error("Invalid Lotsize");
      }
      message.success("Oder has been placed successfully");
    } catch (error) {
      message.destroy();
      message.error(error.message);
    }
  }

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Select
        defaultValue="AUDUSD"
        style={{
          width: 120,
        }}
        onChange={(value) => setSymbol(value)}
        options={[
          {
            value: "AUDUSD",
            label: "AUDUSD",
          },
          {
            value: "EURUSD",
            label: "EURUSD",
          },
          {
            value: "GBPUSD",
            label: "GBPUSD",
          },
          {
            value: "GOLD",
            label: "GOLD",
          },
          {
            value: "XAUUSD",
            label: "XAUUSD",
          },
          {
            value: "USDCHF",
            label: "USDCHF",
          },
          {
            value: "BTCUSD",
            label: "BTCUSD",
          },
          {
            value: "NAS100",
            label: "NAS100",
          },
          {
            value: "NZDUSD",
            label: "NZDUSD",
          },
        ]}
      />
      <Button type="primary" onClick={() => handleBuyOrder("Buy")}>
        Buy
      </Button>
      <Input
        placeholder="0.01"
        style={{ width: 150 }}
        onChange={(e) => setVolume(e.target.value)}
        type="number"
        value={volume}
        min={0.01}
      />
      <Button type="primary" danger onClick={() => handleSellOrder("Sell")}>
        Sell
      </Button>
    </div>
  );
}

export default AddAccount;
