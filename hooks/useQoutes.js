"use client";
import { useRequest } from "ahooks";
import { config } from "../config/config";

async function getQoutes() {
  const res = await fetch(
    `https://mt5.mtapi.be/PriceHistory?id=${config[0].AccountID}&symbol=EURUSD&from=2022-08-01T00%3A00%3A00&to=2022-08-03T00%3A00%3A00&timeFrame=5`
  );
  return await res.json();
}

export default function useQoutes(reload) {
  const { data, error, loading } = useRequest(getQoutes, {
    pollingInterval: 3000,
    reloadDeps: [reload],
  });

  return { data, error, loading };
}
