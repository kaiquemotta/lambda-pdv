exports.handler = async (event) => {
    // Logando o evento para depuração
    console.log("Pre Token Generation event:", JSON.stringify(event));

    // Exemplo de como adicionar uma afirmação (claim) personalizada ao token
    const claimsToAddOrOverride = {
        "custom:example_claim": "example_value", // Adiciona um claim personalizado
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
