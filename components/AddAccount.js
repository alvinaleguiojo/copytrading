"use client";
import React, { useState } from "react";
import { Button } from "antd";
import { Typography, Input, Select, message, Drawer, Space } from "antd";

function AddAccount({ account }) {
  const [volume, setVolume] = useState(0.01);
  const [symbol, setSymbol] = useState("EURUSD");

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

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
    <div
      style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <Select
        showSearch
        defaultValue="EURUSD"
        style={{ width: "100%" }}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
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
          {
            value: "USDJPY",
            label: "USDJPY",
          },
          {
            value: "USDCAD",
            label: "USDCAD",
          },
          {
            value: "GBPJPY",
            label: "GBPJPY",
          },
        ]}
      />
      <Button
        type="primary"
        onClick={() => handleBuyOrder("Buy")}
        style={{
          flex: 1,
          position: "absolute",
          bottom: 10,
          left: 0,
          width: "48%",
          height: 60,
        }}
      >
        Buy
      </Button>
      <Input
        placeholder="0.01"
        style={{ width: "100%" }}
        onChange={(e) => setVolume(e.target.value)}
        type="number"
        value={volume}
        min={0.01}
      />
      <Button
        type="primary"
        danger
        onClick={() => handleSellOrder("Sell")}
        style={{
          flex: 1,
          position: "absolute",
          bottom: 10,
          right: 0,
          width: "48%",
          height: 60,
        }}
      >
        Sell
      </Button>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        // title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
        styles={{ backgroundColor: "red" }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default AddAccount;
