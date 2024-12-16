const handler = async (event) => {
  // Log para verificar o evento que chegou
  console.log('Evento recebido:', JSON.stringify(event));

  // Modificando o evento (adicionando ou sobrescrevendo claims)
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        my_first_attribute: "first_value",
        my_second_attribute: "second_value",
      },
      claimsToSuppress: ["email"],
    },
  };

  // Log para verificar o evento antes de retornar
  console.log('Evento modificado:', JSON.stringify(event));

  // Retorna o evento modificado
  return event;
};

// Exporte a função usando a sintaxe CommonJS
module.exports.handler = handler;
