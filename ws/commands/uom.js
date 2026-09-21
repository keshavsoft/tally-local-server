import { masters } from "tally-xml-tdl";

const startFunc = async (command) => {
    console.log("command , ", command);

    const data = await masters.clean("mani9", "uom");

    // const data = await masters.clean({
    //     company: "mani9", jsonId: "stockItemsWithBaseUnits"
    // });

    // console.log("LAST:", data);

    return data;
};

export default startFunc;