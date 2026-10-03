import { StockItem, Unit } from "./commands/masters/index.js";

export const masterHandlers = {
    "masters.units": Unit.all,
    "masters.StockItem.withBatches": StockItem.withBatches
};


// export const masterHandlers = {
//     "masters.StockItem.withBatches": StockItem.withBatches,
//     "masters.Unit": Unit.all
// };