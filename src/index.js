exports.handler = async (event) => {
    // Logando o evento para depuração
    console.log("Pre Token Generation event:", JSON.stringify(event));

    // Verifica se o evento é do tipo esperado
    if (event.triggerSource !== "TokenGeneration_HostedAuth") {
        console.error("Invalid trigger source:", event.triggerSource);
        throw new Error("Invalid trigger source");
    }

    // Retorna a resposta com a versão 2 (a versão correta para Pre Token Generation)
    const response = {
        version: "2",
        payload: {}
    };

    return response;
};
