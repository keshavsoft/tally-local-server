import { handleCommand } from "./handleCommand.js";

export const handleMessage = async (ws, data) => {

    const text = data.toString();

    let message;

    try {
        message = JSON.parse(text);
    } catch {
        message = text;
    }

    console.log("Received from server:", message);

    try {

        const result = await handleCommand(message);

        ws.send(JSON.stringify({
            requestId: message.requestId,
            success: true,
            data: result
        }));

    } catch (error) {

        ws.send(JSON.stringify({
            requestId: message.requestId,
            success: false,
            message: error.message
        }));

    }
};