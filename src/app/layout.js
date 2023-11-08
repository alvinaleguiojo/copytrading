import "./globals.css";
import { Inter } from "next/font/google";
import Tabs from "../../components/Tabs";
import Logo from "../../components/Logo";
import AccountInfo from "../../components/AccountInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premier CopyTrading",
  description: "Pro Trader by Bossing",
};

export default async function RootLayout({ children }) {
  // const resAccount = await fetch(
  //   `https://mt4.mtapi.be/AccountSummary?id=${process.env.AccountId}`,
  //   {
  //     cache: "no-store",
  //   }
  // );

  // const account = await resAccount.json();
  // let accountBalance = account.balance | 0;
  // let accountEquity = account.equity | 0;
  // let formattedaccountBalance = "$" + accountBalance?.toLocaleString();
  // let formattedaccountEquity = "$" + accountEquity?.toLocaleString();

  // let convertedtotalFloatingProfit = account?.profit;
  // convertedtotalFloatingProfit = convertedtotalFloatingProfit?.toFixed(2);

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#131626", color: "#fff" }}
      >
        <div>
          <Logo />

          <div>
            <Tabs />
          </div>

          <AccountInfo />
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
