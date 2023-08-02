"use client";
import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useRouter, usePathname } from "next/navigation";

const App = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onChange = (key) => {
    if (key == "0") {
      router.push("/");
    }

    if (key == "1") {
      router.push("/open-order");
    }

    if (key == "2") {
      router.push("/closed-order");
    }

    if (key == "3") {
      router.push("/live-open-trades");
    }
  };

  const items = [
    {
      key: "0",
      label: `Summary`,
      children: ``,
    },
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
    {
      key: "3",
      label: `Live Open Trades`,
      children: ``,
    },
  ];

  function Path() {
    switch (pathname) {
      case "/":
        return "0";
      case "/open-order":
        return "1";

      case "/closed-order":
        return "2";

      case "/live-open-trades":
        return "3";
    }
  }

  return <Tabs defaultActiveKey={Path} items={items} onChange={onChange} />;
};

export default App;
