"use client";
import styles from "../src/app/TradeCard.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";

const TradeCard = ({ order, close }) => {
  let entryPrice = order.openPrice.toFixed(4);

  return (
    <div className={styles.card}>
      <div>
        <p>
          <strong>Symbol</strong>
        </p>
        <small>{order.symbol}</small>
      </div>

      <div>
        <p>
          <strong>Type</strong>
        </p>
        <small>{order.orderType}</small>
      </div>

      <div>
        <p>
          <strong>Lotsize</strong>
        </p>
        <small>{order.lots}</small>
      </div>

      <div>
        <p>
          <strong>Entry Price</strong>
        </p>
        <small> {entryPrice}</small>
      </div>

      <div>
        <p>
          <strong>Date</strong>
        </p>
        <small>
          {moment(order.closeTime).format("LLL")} -
          {moment(order.closeTime).format("LLL")}
        </small>
      </div>

      <div>
        <p>
          <strong>Profit</strong>
        </p>
        {order.profit < 0 ? (
          <small style={{ color: "red" }}>{order.profit}</small>
        ) : (
          <small style={{ color: "green" }}>{order.profit}</small>
        )}
      </div>

      {close ? null : <Button icon={<CloseCircleOutlined />} />}
    </div>
  );
};

export default TradeCard;
