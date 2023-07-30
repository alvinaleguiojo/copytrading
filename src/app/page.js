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

  const resAccount = await fetch(
    `https://mt5.mtapi.be/AccountSummary?id=72a053bf-5d2c-44ac-af50-ac88687cb77d`,
    {
      cache: "no-store",
    }
  );

  const account = await resAccount.json();
  const orders = await res.json();

  let accountBalance = account.balance;
  let accountEquity = account.equity;
  let formattedaccountBalance = "$" + accountBalance.toLocaleString();
  let formattedaccountEquity = "$" + accountEquity.toLocaleString();

  let convertedtotalFloatingProfit = account.profit;
  convertedtotalFloatingProfit = convertedtotalFloatingProfit.toFixed(2);

  return (
    <main className={styles.main}>
      <Tabs />
      <div style={{ display: "flex", gap: 30 }}>
        <p>Account Balance: {formattedaccountBalance}</p>
        <p>Equity: {formattedaccountEquity}</p>
        <div style={{ display: "flex" }}>
          <p>Floating:</p>
          <p>
            {convertedtotalFloatingProfit < 0 ? (
              <span style={{ color: "red" }}>
                {convertedtotalFloatingProfit}
              </span>
            ) : (
              <span style={{ color: "green" }}>
                {{ convertedtotalFloatingProfit }}
              </span>
            )}
          </p>
        </div>
      </div>
      <div>
        {orders.map((order, index) => (
          <OrderCard order={order} key={index} />
        ))}
      </div>
    </main>
  );
}
