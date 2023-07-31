"use client";
import React from "react";
import { FunctionOutlined } from "@ant-design/icons";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FunctionOutlined style={{ fontSize: 36, color: "#1677FF" }} />
      <span>CopyTrading</span>
    </div>
  );
}

export default Logo;
