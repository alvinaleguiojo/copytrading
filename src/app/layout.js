import "./globals.css";
import { Inter } from "next/font/google";
import Tabs from "../../components/Tabs";
import Logo from "../../components/Logo";

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
  let accountBalance = account.balance | 0;
  let accountEquity = account.equity | 0;
  let formattedaccountBalance = "$" + accountBalance?.toLocaleString();
  let formattedaccountEquity = "$" + accountEquity?.toLocaleString();

  let convertedtotalFloatingProfit = account?.profit;
  convertedtotalFloatingProfit = convertedtotalFloatingProfit?.toFixed(2);

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "#131626", color: "#fff" }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <Logo />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Balance: {formattedaccountBalance}</p>
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
