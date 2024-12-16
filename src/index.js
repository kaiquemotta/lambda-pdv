exports.handler = async (event, context) => {
    event.response.claimsOverrideDetails = {
         "claimsToAddOrOverride": {
            "attribute_key2": "attribute_value2",
            "attribute_key": "attribute_value"
        }
    };

    return event
};