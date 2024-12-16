exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event)); // Para debugar se necessário

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
