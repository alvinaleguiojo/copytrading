"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getOrderHistory() {
  const res = await fetch(
    `https://mt5.mtapi.be/OrderHistory?id=${config[0].AccountID}&from=2023-03-01T00%3A00%3A00&to=2023-10-01T00%3A00%3A00`
  );
  return await res.json();
}

export default function useCloseDemoTrades(reload) {
  const { data, error, loading } = useRequest(getOrderHistory, {
    pollingInterval: 3000,
    reloadDeps: [reload],
  });

  return { data, error, loading };
}
