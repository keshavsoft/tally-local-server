import { masters } from "tally-xml-tdl";

const startFunc = async (command) => {

    console.log("-----", masters);


    const data = await masters.clean("mani9", "uom");

    console.log("LAST:", data);

    return data;
};

startFunc().then();