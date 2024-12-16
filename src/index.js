// Função handler utilizando CommonJS (sem export)
const handler = async (event) => {
  // Adiciona ou sobrepõe claims no evento
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        my_first_attribute: "first_value",
        my_second_attribute: "second_value",
      },
      claimsToSuppress: ["email"], // Suprime o claim 'email'
    },
  };

  // Retorna o evento com a modificação dos claims
  return event;
};

// Exporte a função usando a sintaxe CommonJS
module.exports.handler = handler;
