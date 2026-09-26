import { masters } from "tally-to-json";

const startFunc = async (command = {}) => {
    const companyName = command?.company || "mani9";
    const data = await masters.Unit.all(companyName);
    return data;
};

export default startFunc;
