"use client";
import React, { useEffect, useState } from "react";

const useGetQoutesWebsocket = (symbol) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create WebSocket connection.
    const websocket = new WebSocket(
      "ws://mt5.mtapi.be/Events?id=0d564542-08c2-4540-8861-dd0cfaaa40f1"
    );

    // Connection opened
    websocket.onopen = function (event) {
      websocket.send("Hello Server!");
    };

    // Listen for messages
    websocket.onmessage = function (event) {
      // console.log("Client received a message", event);
      console.log(JSON.parse(event.data));
      let parsedData = JSON.parse(event.data);
      let quoteData = parsedData.Data;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          date: quoteData.Time,
          open: quoteData.Ask,
          low: quoteData.Ask,
          high: quoteData.Bid,
          close: quoteData.Bid,
          volume: quoteData.Volume,
        },
      ]);
    };

    // Listen for close events
    websocket.onclose = function (event) {
      console.log("Client notified socket has closed", event);
      // Clear the messages when the WebSocket connection is closed
      setMessages([]);
    };

    setWs(websocket);
    return () => {
      websocket.close();
    };
  }, [symbol]);

  useEffect(() => {
    // Clear messages when the symbol changes
    setMessages([]);
  }, [symbol]);

  const sendMessage = (message) => {
    if (ws) {
      ws.send(message);
    }
  };

  return { messages };
};

export default useGetQoutesWebsocket;
