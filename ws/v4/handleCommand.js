import { call } from "tally-simple";

export const handleCommand = async (inParams) => {
    const localParams = inParams;
    const localMessage = localParams?.inMessage ?? localParams;

    const localCommand =
        typeof localMessage === "string"
            ? { action: localMessage }
            : localMessage;

    const localAction = localCommand?.action;
    const localCompany = localCommand?.company;

    if (!localAction) {
        throw new Error("Missing command action");
    }

    const localRoute = localAction.startsWith("tally.")
        ? localAction
        : `tally.${localAction}`;
    // console.log("localRoute : ", localRoute, localCompany);

    const fromCall = await call(localRoute, localCompany);
    // console.log("fromCall : ", fromCall);

    return await fromCall;
};

export default handleCommand;
