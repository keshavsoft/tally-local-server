import unitAll from "./Unit/all.js";
import stockItemWithBatches from "./StockItem/withBatches.js";


// import stockItemWithBaseUnits from "./StockItem/withBaseUnits.js";
// import stockItemAll from "./StockItem/all.js";
// import ledgerAll from "./Ledger/all.js";
// import ledgerWithDetails from "./Ledger/withDetails.js";
// import ledgerWithGstDetails from "./Ledger/withGstDetails.js";
// import stockGroupAll from "./StockGroup/all.js";
// import stockGroupWithParent from "./StockGroup/withParent.js";

const Unit = {
    all: unitAll
};

const StockItem = {
    withBatches: stockItemWithBatches
};

// const Ledger = {
//     all: ledgerAll,
//     names: ledgerAll,
//     withDetails: ledgerWithDetails,
//     withGstDetails: ledgerWithGstDetails,
//     moreDetails: ledgerWithGstDetails
// };

// const StockGroup = {
//     all: stockGroupAll,
//     names: stockGroupAll,
//     withParent: stockGroupWithParent
// };

export {
    Unit,
    StockItem
};

export default {
    Unit,
    StockItem
};
