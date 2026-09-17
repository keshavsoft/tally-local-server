import "dotenv/config";
import WebSocket from "ws";
import { handleMessage } from "./handleMessage.js";

export const connect = () => {

    const ws = new WebSocket(process.env.WS_URL);

    ws.on("open", () => {
        console.log("Connected to cloud server");
    });

    ws.on("message", (data) => {
        handleMessage(ws, data);
    });

    ws.on("close", () => {
        console.log("Connection closed");
    });

    ws.on("error", (error) => {
        console.error("WebSocket error:", error.message);
    });

    return ws;
};