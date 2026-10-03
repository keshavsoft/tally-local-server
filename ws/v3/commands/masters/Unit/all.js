import { Unit } from "tally-masters";

const startFunc = async (command = {}) => {
    const companyName = command?.company || "mani9";
    const data = await Unit(companyName);
    console.log("batches : ", data);

    return data;
};

export default startFunc;
