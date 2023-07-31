import "./globals.css";
import { Inter } from "next/font/google";
import Tabs from "../../components/Tabs";
import StartTrading from "../../components/StartTrading";
import Logo from "../../components/Logo";
import Withdraw from "../../components/Withdraw";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Premier CopyTrading",
  description: "Pro Trader by Bossing",
};

export default async function RootLayout({ children }) {
  const resAccount = await fetch(
    `https://mt5.mtapi.be/AccountSummary?id=${process.env.AccountId}`,
    {
      cache: "no-store",
    }
  );

  const account = await resAccount.json();
  let accountBalance = account.balance;
  let accountEquity = account.equity;
  let formattedaccountBalance = "$" + accountBalance.toLocaleString();
  let formattedaccountEquity = "$" + accountEquity.toLocaleString();

  let convertedtotalFloatingProfit = account?.profit;
  convertedtotalFloatingProfit = convertedtotalFloatingProfit.toFixed(2);

  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#F0F2F5" }}>
        <div
          style={{
            backgroundColor: "#fff",
            paddingLeft: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <Logo />
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <p>Balance: {formattedaccountBalance}</p>
              <Withdraw />
            </div>
            <p>Equity: {formattedaccountEquity}</p>
            <div style={{ display: "flex" }}>
              <p>Floating:</p>
              <p>
                {convertedtotalFloatingProfit &&
                convertedtotalFloatingProfit < 0 ? (
                  <span style={{ color: "red" }}>
                    {convertedtotalFloatingProfit}
                  </span>
                ) : (
                  <span style={{ color: "green" }}>
                    {convertedtotalFloatingProfit}
                  </span>
                )}
              </p>
            </div>
            <StartTrading />
          </div>

          <div>
            <Tabs />
          </div>
        </div>

        <div>{children}</div>
      </body>
    </html>
  );
}
