import { vouchers } from "tally-to-json";

const startFunc = async (inCommand = {}) => {
    const localCommand = inCommand;
    const companyName = localCommand?.company || "mani9";
    const fromDate = localCommand?.from || localCommand?.fromDate || "20260401";
    const toDate = localCommand?.to || localCommand?.toDate || "20270331";

    const data = await vouchers.purchases.period(companyName, fromDate, toDate);
    return data;
};

export default startFunc;
