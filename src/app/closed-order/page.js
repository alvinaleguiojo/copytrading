import CloseDemoTrades from "../../../components/CloseDemoTrades";
import { config } from "../../../config/config";

export default async function Page() {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      <CloseDemoTrades config={config[2]} />
    </div>
  );
}
