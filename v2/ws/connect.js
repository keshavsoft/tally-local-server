import WebSocket from "ws";
import { handleMessage } from "./handleMessage.js";

export const connect = () => {

    const ws = new WebSocket("ws://localhost:8080");

    ws.on("open", () => {

        console.log("Connected to server");

        ws.send("Connected to server");

    });

    ws.on("message", handleMessage);

    ws.on("close", () => {

        console.log("Connection closed");

    });

    ws.on("error", (error) => {

        console.error("WebSocket error:", error.message);

    });

    return ws;
};