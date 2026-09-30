import { masters } from "tally-to-json";

const startFunc = async (command = {}) => {
    const companyName = command?.company || "mani9";
    const data = await masters.StockItem.withBaseUnits(companyName);
    return data;
};

export default startFunc;
