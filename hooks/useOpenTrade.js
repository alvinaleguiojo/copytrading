"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getOpenOrder() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=${config[0].AccountID}`
  );
  return await res.json();
}

export default function useOpenTrades(reload) {
  const { data, error, loading } = useRequest(getOpenOrder, {
    pollingInterval: 3000,
    reloadDeps: [reload],
  });

  return { data, error, loading };
}
