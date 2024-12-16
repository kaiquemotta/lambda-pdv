exports.handler = async (event) => {
    // Logando o evento para depuração
    console.log("Pre Token Generation event:", JSON.stringify(event));

    // Modificando o e-mail no token
    const claimsToAddOrOverride = {
        "email": "kaique.motta@hotmail.com" // Substitui o valor do e-mail
    };

    // Estrutura da resposta com a versão "1" e claimsOverrideDetails
    const response = {
        version: "1",
        payload: {
            claimsOverrideDetails: {
                claimsToAddOrOverride: claimsToAddOrOverride
            }
        }
    };

    return response;
};
