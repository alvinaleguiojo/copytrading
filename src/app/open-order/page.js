import OrderCard from "../../../components/OrderCard";

export default async function Page() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=${process.env.AccountId}`,
    {
      cache: "no-store",
    }
  );

  const orders = await res.json();

  return (
    <div>
      {orders.map((order, index) => (
        <OrderCard order={order} key={index} />
      ))}
    </div>
  );
}
