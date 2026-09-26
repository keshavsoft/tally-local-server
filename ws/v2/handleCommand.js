import handleLast from "./commands/last.js";
import handleLedgerNames from "./commands/ledgerNames.js";
import stockGroupsAndParent from "./commands/stockGroupsAndParent.js";
import stockItemsWithBaseUnits from "./commands/stockItemsWithBaseUnits.js";
import company from "./commands/company.js";
import uom from "./commands/uom.js";
import stockItems from "./commands/stockItems.js";

const handlers = {
    stockItemsWithBaseUnits,
    stockGroupsAndParent,
    LAST: handleLast,
    GET_LAST_VOUCHER: handleLast,
    GET_LEDGER_NAMES: handleLedgerNames,
    uom, stockItems
};

export const handleCommand = async (message) => {
    const command =
        typeof message === "string"
            ? { action: message }
            : message;

    if (command.action === "company") {
        return await company();
    };

    // console.log("message------ : ", command);

    const handler = handlers[command.action];

    if (!handler) {
        throw new Error(`Unknown command: ${command.action}`);
    }

    return await handler(command);
};