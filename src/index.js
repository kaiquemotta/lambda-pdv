const handler = async (event) => {
  console.log('Evento recebido:', JSON.stringify(event));

  // Simulando a validação do CPF
  const cpf = event.request.userAttributes['cognito:username']; // Ou outro campo onde o CPF é armazenado
  console.log('CPF a ser validado:', cpf);

  // Aqui mockamos a resposta como se o CPF sempre existisse
  const cpfExists = true; // Simula que o CPF sempre existe

  if (cpfExists) {
    console.log('CPF encontrado:', cpf);

    event.response = {
      claimsOverrideDetails: {
        claimsToAddOrOverride: {
          cpf_valido: "sim", // Indica que o CPF é válido
        },
        claimsToSuppress: [],
      },
    };
  } else {
    console.log('CPF não encontrado:', cpf);

    event.response = {
      claimsOverrideDetails: {
        claimsToAddOrOverride: {
          cpf_valido: "não", // Indica que o CPF não é válido
        },
        claimsToSuppress: [],
      },
    };

    throw new Error('CPF não encontrado.');
  }

  console.log('Evento modificado:', JSON.stringify(event));
  return event;
};

module.exports.handler = handler;
