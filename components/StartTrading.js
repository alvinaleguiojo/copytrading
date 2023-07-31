"use client";
import React, { useState, useRef } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

function StartTrading() {
  const [lotSize, setLotSize] = useState(0.01);
  const inputRef = useRef();

  const handleButtonClick = () => {
    // Perform your logic here when the button is clicked
    // For example, you might want to print the current lot size:
    console.log(`The current lot size is: ${lotSize}`);
    // You might also want to do something with the inputRef here
  };

  return (
    <div style={{ display: "flex", gap: 5 }}>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Text style={{ minWidth: 50 }}>Lotsize</Text>
        <Input
          placeholder="0.01"
          value={lotSize}
          type="number"
          onChange={(e) => setLotSize(parseFloat(e.target.value))}
          ref={inputRef}
        />
      </div>
      <Button
        type="primary"
        icon={<PlayCircleOutlined />}
        onClick={handleButtonClick}
      >
        Start Copy
      </Button>
    </div>
  );
}

export default StartTrading;
