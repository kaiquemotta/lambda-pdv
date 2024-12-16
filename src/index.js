const axios = require('axios'); // Importando o axios para fazer requisições HTTP

const handler = async (event) => {
  console.log('Evento recebido:', JSON.stringify(event));

  const cpf = event.request.userAttributes['cognito:username']; // Ou outro campo onde o CPF é armazenado
  console.log('CPF a ser validado:', cpf);

  // Mockando a resposta do serviço de validação de CPF
  // A resposta será simulada como se o CPF fosse válido (exemplo: { exists: true })
  let mockResponse = { data: { exists: true } };  // Simulando CPF encontrado

  // Caso queira simular CPF não encontrado, altere para:
  // let mockResponse = { data: { exists: false } };

  // Para simular erro de rede ou outro tipo de falha:
  // let mockResponse = { error: "Erro na comunicação com o serviço de CPF" };

  try {
    // Usando a resposta mockada em vez de uma requisição real
    console.log('Simulando requisição ao serviço de CPF...');

    // Verificando se o CPF existe (mock)
    if (mockResponse.data.exists) {
      console.log('CPF encontrado:', cpf);

      event.response = {
        claimsOverrideDetails: {
          claimsToAddOrOverride: {
            cpf_valido: "sim",  // Exemplo de claim adicional
          },
          claimsToSuppress: [],  // Se desejar suprimir alguma claim
        },
      };
    } else {
      console.log('CPF não encontrado:', cpf);

      // Retorne um erro se o CPF não for encontrado
      throw new Error('CPF não encontrado.');
    }
  } catch (error) {
    console.error('Erro na validação do CPF:', error.message);

    // Caso ocorra erro na validação mockada
    event.response = {
      claimsOverrideDetails: {
        claimsToAddOrOverride: {
          cpf_valido: "não",  // Exemplo de claim para indicar que o CPF não é válido
        },
        claimsToSuppress: [],  // Se necessário, suprimir alguma claim
      },
    };

    // Retorna o erro para o fluxo de autenticação
    throw new Error('Erro ao validar CPF');
  }

  console.log('Evento modificado:', JSON.stringify(event));
  return event;
};

module.exports.handler = handler;
