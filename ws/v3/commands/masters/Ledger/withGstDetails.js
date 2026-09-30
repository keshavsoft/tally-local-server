import { masters } from "tally-to-json";

const startFunc = async (command = {}) => {
    const companyName = command?.company || "mani9";
    const data = await masters.Ledger.withGstDetails(companyName);
    return data;
};

export default startFunc;
