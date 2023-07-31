import styles from "../src/app/TradeCard.module.css";

const TradeCard = ({ order }) => {
  return (
    <div className={styles.card}>
      <h3>{order.symbol}</h3>
      <strong>Type:</strong> {order.orderType}
      <div style={{ display: "flex", gap: 5 }}>
        <p>
          <strong>Profit:</strong>
        </p>
        {order.profit < 0 ? (
          <p style={{ color: "red" }}>{order.profit}</p>
        ) : (
          <p style={{ color: "green" }}>{order.profit}</p>
        )}
      </div>
      <p>
        <strong>Lotsize:</strong> {order.lots}
      </p>
      <p>
        <strong>Entry Price:</strong> {order.openPrice}
      </p>
    </div>
  );
};

export default TradeCard;
