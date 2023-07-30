"use client";
import React from "react";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
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

const App = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default App;
