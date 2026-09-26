import { company } from "tally-xml-tdl";
// import { get, clean } from "../../../src/v6/index.js";

const startFunc = async (command) => {

    const data = await company({
        company: "mani9", jsonId: "stockItemsWithBaseUnits"
    });

    // console.log("LAST:", data);

    return data;
};

export default startFunc;