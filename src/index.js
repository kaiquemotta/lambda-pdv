const http = require('http');

const handler = async (event) => {
  console.log('Evento recebido:', JSON.stringify(event));

  // Recuperando o CPF do evento
  const cpf = event.request.userAttributes['cognito:username']; // Ou outro campo onde o CPF é armazenado
  console.log('CPF a ser validado:', cpf);

  let cpfExists = false; // Inicializa como false

  try {
    // Fazendo a chamada para o endpoint externo
    const options = {
      hostname: '44.220.133.153',
      port: 8080,
      path: `/customers/${cpf}`,
      method: 'GET',
    };

    cpfExists = await new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        if (res.statusCode === 200) {
          resolve(true); // CPF encontrado
        } else {
          resolve(false); // CPF não encontrado
        }
      });

      req.on('error', (e) => {
        console.error('Erro na requisição:', e);
        reject(false);
      });

      req.end();
    });
  } catch (error) {
    console.error('Erro ao validar o CPF:', error.message);
  }

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
