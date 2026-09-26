import { vouchers } from "tally-to-json";

const startFunc = async (inCommand = {}) => {
    const localCommand = inCommand;
    const companyName = localCommand?.company || "mani9";

    const data = await vouchers.purchases.all(companyName);
    return data;
};

export default startFunc;
