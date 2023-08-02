import AccountCard from "../../components/AccountCard";
import Accounts from "../../components/Accounts";
import { TradingChart } from "../../components/Chart";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <TradingChart />
        <Accounts />
      </div>
    </main>
  );
}
