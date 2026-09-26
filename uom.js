import { masters } from "tally-to-json";

const startFunc = async (command) => {
    console.log("-----", masters);

    const data = await masters.Unit("mani9");

    console.log("LAST:", data);

    return data;
};

startFunc().then();