import { StockItem } from "tally-masters";

const startFunc = async (command = {}) => {
    // console.log("command : ", command);
    const companyName = command?.company || "mani9";
    const data = await StockItem.withBatches(companyName);
    // console.log("batches : ", data);

    return data;
};

export default startFunc;
