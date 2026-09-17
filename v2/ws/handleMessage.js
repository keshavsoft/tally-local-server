import { handleCommand } from "./handleCommand.js";

export const handleMessage = (data) => {

    const text = data.toString();

    let message;

    try {
        message = JSON.parse(text);
    } catch {
        message = text;
    }

    console.log("Received from server:", message);

    handleCommand(message);
};