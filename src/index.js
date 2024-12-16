exports.handler = async (event) => {
    if (event.triggerSource === "TokenGeneration_HostedAuth") {
        const userAttributes = {
            email: 'kaique.motta@hotmail.com',
            given_name: 'Kaique',
            family_name: 'Motta',
            cpf: "469.622.488-06"
        };
        return {
            version: "1",
            userAttributes: userAttributes
        };
    } else {
        throw new Error("Invalid trigger source");
    }
};
