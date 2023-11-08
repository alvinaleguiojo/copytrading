"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getOpenLiveOrder() {
  const res = await fetch(
    "https://mt4.mtapi.be/OpenedOrders?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0"
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
