import OrderCard from "../../../components/OrderCard";

export default async function Page() {
  const res = await fetch(
    `https://mt5.mtapi.be/OrderHistory?id=${process.env.AccountId}&from=2023-03-01T00%3A00%3A00&to=2023-10-01T00%3A00%3A00`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <div>
      {data.orders.map((order, index) =>
        index !== 0 ? <OrderCard order={order} key={index} /> : null
      )}
    </div>
  );
}
