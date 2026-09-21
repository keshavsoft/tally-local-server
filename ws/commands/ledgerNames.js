import { masters } from "tally-xml-tdl";

const startFunc = async (command) => {
    const data = await masters.clean("mani9", "ledgerNames");

    return data;
};

export default startFunc;