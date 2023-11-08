import OrderCards from "../../../components/OrderCards";
import { config } from "../../../config/config";

export default async function Page() {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      <OrderCards config={config[0]} />
    </div>
  );
}
