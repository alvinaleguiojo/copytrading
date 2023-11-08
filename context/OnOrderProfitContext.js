"use client";
import { createContext, useState } from "react";

export const OnOrderProfitProvider = createContext({});

export default function OnOrderProfitProviderWrapper({ children }) {
  const [tradingAccountInfo, setTradingAccountInfo] = useState({});

  return (
    <OnOrderProfitProvider.Provider
      value={{ tradingAccountInfo, setTradingAccountInfo }}
    >
      {children}
    </OnOrderProfitProvider.Provider>
  );
}
