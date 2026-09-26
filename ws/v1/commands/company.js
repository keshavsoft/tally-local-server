import { company } from "tally-xml-tdl";

const startFunc = async (command) => {
    const data = await company();
    console.log("company :", data);

    return data;
};

export default startFunc;