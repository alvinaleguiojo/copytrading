import styles from "../src/app/TradeCard.module.css";

const TradeCard = ({ order }) => {
  return (
    <div className={styles.card}>
      <h2>{order.symbol}</h2>
      <strong>Profit:</strong>
      {order.profit < 0 ? (
        <p style={{ color: "red" }}>{order.profit}</p>
      ) : (
        <p style={{ color: "green" }}>{order.profit}</p>
      )}
      <strong>Lotsize:</strong> {order.lots}
    </div>
  );
};

export default TradeCard;
