import OrderCard from "../../components/OrderCard";
import styles from "./page.module.css";
import { Empty } from "antd";

export default async function Home() {
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
    <main className={styles.main}>
      {orders.map((order, index) => (
        <OrderCard order={order} key={index} />
      ))}
    </main>
  );
}
