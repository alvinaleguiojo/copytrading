import LiveOrderCards from "../../../components/LiveOrderCards";
import { config } from "../../../config/config";

export default async function Page() {
  return (
    <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15 }}>
      <LiveOrderCards config={config[1]} />
    </div>
  );
}
