"use client";
import React, { useState, useEffect } from "react";
import AccountCard from "./AccountCard";
import { config } from "../config/config";

function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getAccountBalance() {
      const accountData = await Promise.all(
        config.map(async (value) => {
          const res = await fetch(
            `https://mt5.mtapi.be/AccountSummary?id=${value.AccountID}`
          );
          const data = await res.json();
          return { ...value, data };
        })
      );
      setAccounts(accountData);
    }

    getAccountBalance();
  }, []);

  return (
    <div>
      {accounts?.map((account, index) => {
        const mergedAccount = {
          ...account,
          ...config.find((item) => item.AccountID === account.AccountID),
        };
        return (
          <AccountCard
            account={mergedAccount}
            key={index}
            data={account.data}
          />
        );
      })}
    </div>
  );
}

export default Accounts;
