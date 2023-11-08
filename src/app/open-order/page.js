import OrderCards from "../../../components/OrderCards";
import { config } from "../../../config/config";

export default async function Page() {
  const res = await fetch(
    "https://mt4.mtapi.be/OpenedOrders?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0"
  );
  const data = await res.json();

  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      <OrderCards config={config[0]} data={data} />
    </div>
  );
}
