import OrderCard from "../../components/OrderCard";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=72a053bf-5d2c-44ac-af50-ac88687cb77d`,
    {
      cache: "no-store",
    }
  );
  const orders = await res.json();

  return (
    <main className={styles.main}>
      <div>
        {orders.map((order, index) => (
          <OrderCard order={order} key={index} />
        ))}
      </div>
    </main>
  );
}
