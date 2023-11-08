"use client";
import styles from "../src/app/TradeCard.module.css";
import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Modal, Typography, Input, Tag, Drawer } from "antd";
import moment from "moment";
import { useState } from "react";
const { Text } = Typography;

const TradeCard = ({ order, close, setReload, config }) => {
  let entryPrice = order?.openPrice.toFixed(4);
  const [loading, setLoading] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);
  const [stopLoss, setStopLoss] = useState(150);
  const [takeprofit, setTakeProfit] = useState(300);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  async function handleCloseTrades() {
    message.loading("Loading", 0);
    setLoading(true);
    try {
      await fetch(
        `https://mt4.mtapi.be/OrderClose?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0&ticket=${order.ticket}`
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
        `https://mt4.mtapi.be/OrderModify?id=85dce7bb-c281-4990-8a4a-de2b061b4ef0&ticket=${
          order.ticket
        }&stoploss=${entryPrice - stopLoss}&takeprofit=${
          entryPrice + takeprofit
        }`
      );
      const data = await res.json();
      message.destroy();
      if (data.code == "INVALID_STOPS") {
        setReload((prev) => !prev);
        message.error(data.message);
      }
      message.success("Trade successfully modified");
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

      {/* <div>
        <p>
          <strong>Ticket</strong>
        </p>
        <small>{order.ticket}</small>
      </div> */}

      <div>
        <p>
          <strong>Type</strong>
        </p>
        {order.type == "Buy" ? <Tag color="blue">{order.type}</Tag> : null}
        {order.type == "Sell" ? <Tag color="red">{order.type}</Tag> : null}
      </div>

      <div>
        <p>
          <strong>Lotsize</strong>
        </p>
        <small>{order.lots}</small>
      </div>

      {/* <div>
        <p>
          <strong>Entry Price</strong>
        </p>
        <small> {entryPrice}</small>
      </div> */}

      {order.stopLoss !== 0 ? (
        <div>
          <p>
            <strong>Stop Loss</strong>
          </p>
          <small> {order.stopLoss}</small>
        </div>
      ) : null}
      {/* 
      <div>
        <p>
          <strong>Date Entry</strong>
        </p>
        <small>{moment(order.openTime).format("MMMM DD, YYYY h:mm a")}</small>
      </div> */}

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
      </Modal>

      {!close ? (
        <div style={{ display: "flex", gap: 5 }}>
          {close ? null : (
            <Button
              disabled={loading}
              loading={loading}
              icon={<EditOutlined />}
              // onClick={() => setModal1Open(true)}
              onClick={showDrawer}
              type="primary"
            />
          )}

          {close ? null : (
            <Button
              disabled={loading}
              loading={loading}
              icon={<CloseCircleOutlined />}
              onClick={handleCloseTrades}
              type="primary"
              danger
            />
          )}

          <Drawer
            // title="Drawer with extra actions"
            placement={placement}
            width={500}
            onClose={onClose}
            open={open}
            // extra={
            //   <Space>
            //     <Button onClick={onClose}>Cancel</Button>
            //     <Button type="primary" onClick={onClose}>
            //       OK
            //     </Button>
            //   </Space>
            // }
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Text>Take Profit</Text>
              <Input
                value={takeprofit}
                placeholder="enter price"
                onChange={(e) => setTakeProfit(e.target.value)}
                type="number"
              />

              <Text>Stop Loss</Text>
              <Input
                value={stopLoss}
                placeholder="enter price"
                onChange={(e) => setStopLoss(e.target.value)}
                type="number"
              />
              <Button type="primary" onClick={handleUpdateTrades}>
                Save
              </Button>
            </div>
          </Drawer>
        </div>
      ) : null}
    </div>
  );
};

export default TradeCard;
