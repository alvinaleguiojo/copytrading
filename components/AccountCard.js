"use client";
import React, { useEffect, useState } from "react";
import styles from "../src/app/AccountCard.module.css";
import StartTrading from "./StartTrading";
import { Button, Input, Typography, Switch, Drawer, Space } from "antd";
import Withdraw from "./Withdraw";
import AddAccount from "./AddAccount";
const { Title, Paragraph, Text, Link } = Typography;

function AccountCard({ account }) {
  const {
    data: { balance = 0, equity = 0 },
  } = account;
  let formattedaccountBalance = "$" + balance.toLocaleString();
  let formattedaccountEquity = "$" + equity.toLocaleString();

  return (
    <div className={styles.card}>
      {/* <Text style={{ color: "#fff" }}>Account ID: {account.UserID} </Text>
      <Text style={{ color: "#fff" }}>Name: {account.Name} </Text>
      <Text style={{ color: "#fff" }}>Balance: {formattedaccountBalance} </Text>
      <Text style={{ color: "#fff" }}>Equity: {formattedaccountEquity} </Text> */}
      <AddAccount account={account} />

      {/* <StartTrading account={account} /> */}
    </div>
  );
}

export default AccountCard;
