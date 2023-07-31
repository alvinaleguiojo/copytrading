import OrderCard from "../../../components/OrderCard";
import { Empty } from "antd";

export default async function Page() {
  const res = await fetch(
    `https://mt5.mtapi.be/OrderHistory?id=${process.env.AccountId}&from=2023-03-01T00%3A00%3A00&to=2023-10-01T00%3A00%3A00`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  if (data.length === 0) {
    return <Empty description={<p>No closed trades</p>} />;
  }

  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      {data.orders.map((order, index) =>
        index !== 0 ? (
          <OrderCard close={true} order={order} key={index} />
        ) : null
      )}
    </div>
  );
}
