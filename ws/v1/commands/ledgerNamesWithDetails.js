import { masters } from "tally-xml-tdl";

const startFunc = async (command) => {
    const data = await masters.clean("mani9", "ledgerNamesWithDetails");

    return data;
};

export default startFunc;