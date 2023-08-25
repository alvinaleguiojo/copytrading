"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { Typography, Input, Select, message } from "antd";

function AddAccount({ account }) {
  const [volume, setVolume] = useState(0.01);
  const [symbol, setSymbol] = useState("NAS100");

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

  async function handleChangeCurrency(currency) {
    // setSymbol(currency);

    // const resUnsubscribe = await fetch(`https://mt5.mtapi.be/UnSubscribe?id=0d564542-08c2-4540-8861-dd0cfaaa40f1&symbol=EURUSD`)
    const res = await fetch(
      ` https://mt5.mtapi.be/Subscribe?id=0d564542-08c2-4540-8861-dd0cfaaa40f1&symbol=${currency}&interval=1`
    );

    // `https://mt5.mtapi.be/PriceHistory?id=${account.AccountID}&symbol=${currency}&from=2022-08-01T00%3A00%3A00&to=2022-08-03T00%3A00%3A00&timeFrame=5`
    const data = await res.json();
    console.log(data);
  }

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Select
        showSearch
        defaultValue="NAS100"
        style={{
          width: 150,
        }}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        onChange={(value) => setSymbol(value)}
        options={[
          // {
          //   value: "AUDUSD",
          //   label: "AUDUSD",
          // },
          // {
          //   value: "EURUSD",
          //   label: "EURUSD",
          // },
          // {
          //   value: "GBPUSD",
          //   label: "GBPUSD",
          // },
          // {
          //   value: "GOLD",
          //   label: "GOLD",
          // },
          // {
          //   value: "XAUUSD",
          //   label: "XAUUSD",
          // },
          // {
          //   value: "USDCHF",
          //   label: "USDCHF",
          // },
          // {
          //   value: "BTCUSD",
          //   label: "BTCUSD",
          // },
          {
            value: "NAS100",
            label: "NAS100",
          },
          // {
          //   value: "NZDUSD",
          //   label: "NZDUSD",
          // },
          // {
          //   value: "USDJPY",
          //   label: "USDJPY",
          // },
          // {
          //   value: "USDCAD",
          //   label: "USDCAD",
          // },
          // {
          //   value: "GBPJPY",
          //   label: "GBPJPY",
          // },
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
