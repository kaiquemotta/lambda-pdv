const https = require('https');

const handler = async (event) => {
  console.log('Evento recebido:', JSON.stringify(event));

  const cpf = event.request.userAttributes['cognito:username']; // Ou outro campo onde o CPF é armazenado
  console.log('CPF a ser validado:', cpf);

  // Simulação de uma requisição HTTP para um serviço externo
  const url = `https://api.validarcpf.com/${cpf}`;

  // Função para fazer a requisição HTTP
  const getCpfValidation = () => {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';

        // Coletando os dados da resposta
        res.on('data', (chunk) => {
          data += chunk;
        });

        // Quando a resposta for totalmente recebida
        res.on('end', () => {
          resolve(JSON.parse(data)); // Retorna a resposta como objeto
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  };

  try {
    const validationResponse = await getCpfValidation();

    if (validationResponse.exists) {
      console.log('CPF encontrado:', cpf);

      event.response = {
        claimsOverrideDetails: {
          claimsToAddOrOverride: {
            cpf_valido: "sim",
          },
          claimsToSuppress: [],
        },
      };
    } else {
      console.log('CPF não encontrado:', cpf);
      throw new Error('CPF não encontrado.');
    }
  } catch (error) {
    console.error('Erro na validação do CPF:', error.message);

    event.response = {
      claimsOverrideDetails: {
        claimsToAddOrOverride: {
          cpf_valido: "não",
        },
        claimsToSuppress: [],
      },
    };

    throw new Error('Erro ao validar CPF');
  }

  console.log('Evento modificado:', JSON.stringify(event));
  return event;
};

module.exports.handler = handler;
