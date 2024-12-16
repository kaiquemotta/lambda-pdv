exports.handler = async (event) => {
    // Verifique se o triggerSource é o esperado para pre-token generation
    if (event.triggerSource === "TokenGeneration_HostedAuth") {
        // Aqui você pode definir ou modificar os atributos do usuário
        const userAttributes = {
            email: 'kaique.motta@hotmail.com',
            given_name: 'Kaique',
            family_name: 'Motta',
            cpf: "469.622.488-06"  // Coloque o CPF aqui, como desejado
        };

        // Retorne a versão 1 e os atributos do usuário para o Cognito
        return {
            version: "1",  // Versão esperada
            userAttributes: userAttributes  // Retorna os atributos modificados
        };
    } else {
        // Se o triggerSource não for o esperado, lance um erro
        throw new Error("Invalid trigger source");
    }
};
