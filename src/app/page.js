import AccountCard from "../../components/AccountCard";
import AddAccount from "../../components/AddAccount";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <AddAccount />
      </div>

      <div>
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
    </main>
  );
}
