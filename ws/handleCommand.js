import { importData } from "tally-xml-tdl";

export const handleCommand = async (message) => {

    if (message === "last") {

        const data = await importData.transaction.last({
            company: "Mani9"
        });

        console.log("Tally response:", data);

        return;
    }

    console.log("Unknown command:", message);
};