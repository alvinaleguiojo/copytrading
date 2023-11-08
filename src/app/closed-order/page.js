import CloseDemoTrades from "../../../components/CloseDemoTrades";
import { config } from "../../../config/config";

export default async function Page() {
  const res = await fetch(
    "https://mt4.mtapi.be/OrderHistory?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0&from=2023-03-10T00%3A00%3A00&to=2023-11-30T00%3A00%3A00"
  );

  const data = await res.json();

  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      <CloseDemoTrades config={config[0]} data={data} />
    </div>
  );
}
