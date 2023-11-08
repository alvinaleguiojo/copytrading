"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getOrderHistory() {
  const res = await fetch(
    `https://mt4.mtapi.be/OrderHistory?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0&from=2023-03-10T00%3A00%3A00&to=2023-11-30T00%3A00%3A00`
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
