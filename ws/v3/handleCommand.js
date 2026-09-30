import company from "./commands/company.js";

// import handleLast from "./commands/last.js";
// import { Unit, StockItem, Ledger, StockGroup } from "./commands/masters/index.js";
// import vouchers from "./commands/vouchers/index.js";

const handlers = {
    // Company & Utility
    company,

    // LAST: handleLast,
    // GET_LAST_VOUCHER: handleLast,

    // // StockItem
    // "masters.StockItem.withBatches": StockItem.withBatches,
    // "StockItem.withBatches": StockItem.withBatches,
    // stockItemsWithBatches: StockItem.withBatches,

    // "masters.StockItem.withBaseUnits": StockItem.withBaseUnits,
    // "StockItem.withBaseUnits": StockItem.withBaseUnits,
    // stockItemsWithBaseUnits: StockItem.withBaseUnits,

    // "masters.StockItem.all": StockItem.all,
    // "StockItem.all": StockItem.all,
    // "masters.StockItem": StockItem.all,
    // StockItem: StockItem.all,
    // stockItems: StockItem.all,

    // // Unit
    // "masters.Unit.all": Unit.all,
    // "Unit.all": Unit.all,
    // "masters.Unit": Unit.all,
    // Unit: Unit.all,
    // uom: Unit.all,

    // // Ledger
    // "masters.Ledger.withDetails": Ledger.withDetails,
    // "Ledger.withDetails": Ledger.withDetails,
    // ledgerNamesWithDetails: Ledger.withDetails,

    // "masters.Ledger.withGstDetails": Ledger.withGstDetails,
    // "Ledger.withGstDetails": Ledger.withGstDetails,
    // ledgerNamesMoreDetails: Ledger.withGstDetails,

    // "masters.Ledger.all": Ledger.all,
    // "Ledger.all": Ledger.all,
    // "masters.Ledger": Ledger.all,
    // Ledger: Ledger.all,
    // GET_LEDGER_NAMES: Ledger.all,
    // ledgerNames: Ledger.all,

    // // StockGroup
    // "masters.StockGroup.withParent": StockGroup.withParent,
    // "StockGroup.withParent": StockGroup.withParent,
    // stockGroupsAndParent: StockGroup.withParent,

    // "masters.StockGroup.all": StockGroup.all,
    // "StockGroup.all": StockGroup.all,
    // "masters.StockGroup": StockGroup.all,
    // StockGroup: StockGroup.all,
    // stockGroups: StockGroup.all,

    // // Vouchers - Purchases
    // "vouchers.purchases.period": vouchers.purchases.period,
    // "Vouchers.Purchases.period": vouchers.purchases.period,
    // "purchases.period": vouchers.purchases.period,
    // "vouchers.purchases.all": vouchers.purchases.all,
    // "Vouchers.Purchases.all": vouchers.purchases.all,
    // "purchases.all": vouchers.purchases.all,
    // "vouchers.purchases": vouchers.purchases.all,
    // "purchases": vouchers.purchases.all
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