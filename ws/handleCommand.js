import handleLast from "./commands/last.js";
import handleLedgerNames from "./commands/ledgerNames.js";

const handlers = {
    LAST: handleLast,
    GET_LAST_VOUCHER: handleLast,
    GET_LEDGER_NAMES: handleLedgerNames
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