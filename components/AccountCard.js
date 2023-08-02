"use client";
import React, { useEffect, useState } from "react";
import styles from "../src/app/AccountCard.module.css";
import StartTrading from "./StartTrading";
import { Button, Input, Typography, Switch } from "antd";
import Withdraw from "./Withdraw";
import AddAccount from "./AddAccount";
const { Title, Paragraph, Text, Link } = Typography;

function AccountCard({ account }) {
  let formattedaccountBalance = "$" + account?.data?.balance?.toLocaleString();
  let formattedaccountEquity = "$" + account?.data?.equity?.toLocaleString();

  console.log(account);

  return (
    <div className={styles.card}>
      <Text>Account ID: {account.UserID} </Text>
      <Text>Name: {account.Name} </Text>
      <Text>Balance: {formattedaccountBalance} </Text>
      <Text>Equity: {formattedaccountEquity} </Text>
      <AddAccount account={account} />
      <StartTrading />
    </div>
  );
}

export default AccountCard;
