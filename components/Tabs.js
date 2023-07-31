"use client";
import React from "react";
import { Tabs } from "antd";
import { useRouter, usePathname } from "next/navigation";

const App = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const onChange = (key) => {
    if (key == "1") {
      router.push("/open-order");
    }

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

  return (
    <Tabs
      defaultActiveKey={pathname == "/open-order" ? "1" : "2"}
      items={items}
      onChange={onChange}
    />
  );
};

export default App;
