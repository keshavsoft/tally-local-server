import company from "tally-company";

const startFunc = async (command) => {
    const data = await company();
    console.log("company :", data);

    return data;
};

export default startFunc;