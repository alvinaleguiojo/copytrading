import OrderCard from "../../components/OrderCard";
import styles from "./page.module.css";
import Tabs from "../../components/Tabs";

export default async function Home() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=72a053bf-5d2c-44ac-af50-ac88687cb77d`,
    {
      cache: "no-store",
    }
  );

  const orders = await res.json();

  const totalFloatingProfit = orders.reduce(
    (total, order) => total + order.profit,
    0
  );

  let convertedtotalFloatingProfit = totalFloatingProfit;
  convertedtotalFloatingProfit = convertedtotalFloatingProfit.toFixed(2);

  return (
    <main className={styles.main}>
      <Tabs />
      <p>
        Floating:
        {convertedtotalFloatingProfit < 0 ? (
          <span style={{ color: "red" }}>{convertedtotalFloatingProfit}</span>
        ) : (
          <span style={{ color: "green" }}>
            {{ convertedtotalFloatingProfit }}
          </span>
        )}
      </p>
      {orders.map((order, index) => (
        <OrderCard order={order} key={index} />
      ))}
    </main>
  );
}
