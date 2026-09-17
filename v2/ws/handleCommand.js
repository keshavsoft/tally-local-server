import handleLast from "./commands/last.js";
import handleLedgerNames from "./commands/ledgerNames.js";

const handlers = {
    LAST: handleLast,
    GET_LAST_VOUCHER: handleLast,
    GET_LEDGER_NAMES: handleLedgerNames
};

export const handleCommand = async (message) => {

    try {

        const command =
            typeof message === "string"
                ? { action: message }
                : message;

        if (!command || typeof command !== "object") {
            console.log("Invalid command:", message);
            return;
        };
        console.log("command : ", command);

        const handler = handlers[command.action];

        if (!handler) {
            console.log("Unknown command:", command);
            return;
        }

        await handler(command);

    } catch (error) {

        console.error("Command failed:", error.message);

    }
};