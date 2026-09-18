import { clean } from "tally-xml-tdl";

const startFunc = async (command) => {

    const data = await clean({
        company: "mani9", jsonId: "stockGroupsAndParent"
    });

    console.log("LAST:", data);

    return data;
};

export default startFunc;