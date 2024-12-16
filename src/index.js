exports.handler = async (event) => {
    const userAttributes = {
        email: 'kaique.motta@hotmail.com',
        given_name: 'Kaique',
        family_name: 'Motta',
        cpf: "469.622.488-06"  // Aqui você coloca o CPF como atributo
    };

    return {
        version: "1",  // A versão esperada pela resposta Lambda
        userAttributes: userAttributes  // Retorna todos os atributos juntos
    };
};
