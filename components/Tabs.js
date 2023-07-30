"use client";
import React from "react";
import { Tabs } from "antd";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();
  const onChange = (key) => {
    console.log(key);
    if (key == "2") {
      router.push("/closed-order");
    }
  };

  const items = [
    {
      key: "1",
      label: `Open Trades`,
      children: ``,
    },
    {
      key: "2",
      label: `Closed Trades`,
      children: ``,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default App;
