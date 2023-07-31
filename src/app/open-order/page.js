import OrderCard from "../../../components/OrderCard";

export default async function Page() {
  const res = await fetch(
    `https://mt5.mtapi.be/OpenedOrders?id=0d564542-08c2-4540-8861-dd0cfaaa40f1`,
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
