import { companyHandlers } from "./companyHandlers.js";
import { masterHandlers } from "./masterHandlers.js";

const handlers = {
    ...companyHandlers,
    ...masterHandlers
};

export const handleCommand = async (message) => {
    const command =
        typeof message === "string"
            ? { action: message }
            : message;

    const handler = handlers[command.action];

    if (!handler) {
        throw new Error(`Unknown command: ${command.action}`);
    }

    return await handler(command);
};

export default handleCommand;
