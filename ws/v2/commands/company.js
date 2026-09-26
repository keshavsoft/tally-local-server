import { company } from "tally-to-json";

const startFunc = async (command) => {
    const data = await company();
    console.log("company :", data);

    return data;
};

export default startFunc;