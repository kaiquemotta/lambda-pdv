exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'Kaique',
            surname:'Motta',
            email: 'kaique.motta@hotmail.com'
        }),
    };
};
