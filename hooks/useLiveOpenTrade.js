"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getOpenLiveOrder() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=${config[2].AccountID}`
  );
  return await res.json();
}

export default function useOpenTrades(reload) {
  const { data, error, loading } = useRequest(getOpenLiveOrder, {
    pollingInterval: 3000,
    reloadDeps: [reload],
  });

  return { data, error, loading };
}
