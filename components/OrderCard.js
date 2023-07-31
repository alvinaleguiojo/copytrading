"use client";
import styles from "../src/app/TradeCard.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const TradeCard = ({ order }) => {
  let entryPrice = order.openPrice.toFixed(4);

  return (
    <div className={styles.card}>
      <div>
        <p>
          <strong>Symbol:</strong>
        </p>
        <p>{order.symbol}</p>
      </div>

      <div>
        <p>
          <strong>Type:</strong>
        </p>
        <p>{order.orderType}</p>
      </div>

      <div>
        <p>
          <strong>Profit:</strong>
        </p>
        {order.profit < 0 ? (
          <p style={{ color: "red" }}>{order.profit}</p>
        ) : (
          <p style={{ color: "green" }}>{order.profit}</p>
        )}
      </div>

      <div>
        <p>
          <strong>Lotsize:</strong>
        </p>
        <p>{order.lots}</p>
      </div>

      <div>
        <p>
          <strong>Entry Price:</strong>
        </p>
        <p> {entryPrice}</p>
      </div>

      <Button icon={<CloseCircleOutlined />} />
    </div>
  );
};

export default TradeCard;
