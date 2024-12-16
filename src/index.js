exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event)); // Imprime o evento recebido para depuração

    // Verifica e imprime o tipo de trigger source
    console.log("Trigger source:", event.triggerSource);

    // Verifica se o evento é o trigger correto para a Token Generation
    if (event.triggerSource !== "TokenGeneration_HostedAuth") {
        console.error("Invalid trigger source:", event.triggerSource);
        throw new Error("Invalid trigger source: Expected 'TokenGeneration_HostedAuth'");
    }

    // Retorna a resposta com a versão 2 e um payload vazio
    const response = {
        version: "2", // A versão correta para Pre Token Generation
        payload: {}   // Nenhuma modificação no payload
    };

    return response; // Retorna a resposta para o Cognito
};
