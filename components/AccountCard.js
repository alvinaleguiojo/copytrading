"use client";
import React from "react";
import styles from "../src/app/AccountCard.module.css";
import StartTrading from "./StartTrading";
import { Button, Input, Typography, Switch } from "antd";
import Withdraw from "./Withdraw";
const { Title, Paragraph, Text, Link } = Typography;

function AccountCard() {
  return (
    <div className={styles.card}>
      <Text>Account ID: 1233331</Text> <Text>Balance: $100</Text>
      <Withdraw />
      <StartTrading />
    </div>
  );
}

export default AccountCard;
