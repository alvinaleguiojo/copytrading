import OrderCard from "../../../components/OrderCard";
import { Empty } from "antd";

export default async function Page() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=${process.env.AccountId}`,
    {
      cache: "no-store",
    }
  );

  const orders = await res.json();
  if (orders.length === 0) {
    return <Empty description={<p>No open trades</p>} />;
  }

  return (
    <div style={{ backgroundColor: "#F0F2F5" }}>
      {orders.map((order, index) => (
        <OrderCard order={order} key={index} />
      ))}
    </div>
  );
}
