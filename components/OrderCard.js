"use client";
import styles from "../src/app/TradeCard.module.css";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Modal, Typography, Input } from "antd";
import moment from "moment";
import { useState } from "react";
const { Text } = Typography;

const TradeCard = ({ order, close, setReload, config }) => {
  let entryPrice = order.openPrice.toFixed(4);
  const [loading, setLoading] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [stopLoss, setStopLoss] = useState(0);

  async function handleCloseTrades() {
    message.loading("Loading", 0);
    setLoading(true);
    try {
      await fetch(
        `https://mt5.mtapi.be/OrderClose?id=${config.AccountID}&ticket=${order.ticket}`
      ).then(() => {
        setReload((prev) => !prev);
        message.destroy();
        message.success("Oder has been closed successfully");
      });
    } catch (error) {
      message.destroy();
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdateTrades() {
    message.loading("Loading", 0);
    try {
      const res = await fetch(
        `https://mt5.mtapi.be/OrderModify?id=${config.AccountID}&ticket=${order.ticket}&stoploss=${stopLoss}&takeprofit=0`
      );
      const data = await res.json();
      if (data.code == "INVALID_STOPS") {
        setReload((prev) => !prev);
        message.destroy();
        message.error(data.message);
      }
    } catch (error) {
      message.destroy();
      message.error(error.message);
    } finally {
      setModal1Open(false);
    }
    setModal1Open(false);
  }

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
          <strong>Ticket</strong>
        </p>
        <small>{order.ticket}</small>
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

      {order.stopLoss !== 0 ? (
        <div>
          <p>
            <strong>Trailing Stop</strong>
          </p>
          <small> {order.stopLoss}</small>
        </div>
      ) : null}

      <div>
        <p>
          <strong>Date Entry</strong>
        </p>
        <small>{moment(order.openTime).format("MMMM DD, YYYY h:mm a")}</small>
      </div>

      <div>
        <p>
          <strong>Profit</strong>
        </p>
        {order.profit < 0 ? (
          <small style={{ color: "red" }}>{order.profit.toFixed(2)}</small>
        ) : (
          <small style={{ color: "green" }}>{order.profit.toFixed(2)}</small>
        )}
      </div>

      <Modal
        title="Modify Trade"
        centered
        open={modal1Open}
        onOk={() => handleUpdateTrades()}
        onCancel={() => setModal1Open(false)}
      >
        {/* <Text>Take Profit</Text>
        <Input placeholder="enter price" /> */}
        <Text>Stop Loss</Text>
        <Input
          value={stopLoss}
          placeholder="enter price"
          onChange={(e) => setStopLoss(e.target.value)}
          type="number"
        />
      </Modal>

      {!close ? (
        <div style={{ display: "flex", gap: 5 }}>
          {close ? null : (
            <Button
              disabled={loading}
              loading={loading}
              icon={<EditOutlined />}
              onClick={() => setModal1Open(true)}
            />
          )}

          {close ? null : (
            <Button
              disabled={loading}
              loading={loading}
              icon={<CloseCircleOutlined />}
              onClick={handleCloseTrades}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default TradeCard;
