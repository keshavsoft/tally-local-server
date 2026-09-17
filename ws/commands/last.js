import { importData } from "tally-xml-tdl";

const startFunc = async (command) => {

    const data = await importData.transaction.last({
        company: "Mani9"
    });

    console.log("LAST:", data);

    return data;
};

export default startFunc;