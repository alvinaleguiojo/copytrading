"use client";
import React from "react";
import { Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

function Withdraw() {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <Button type="primary" icon={<CreditCardOutlined />}>
        Withdraw
      </Button>
      <Button icon={<CreditCardOutlined />}>Deposit</Button>
    </div>
  );
}

export default Withdraw;
