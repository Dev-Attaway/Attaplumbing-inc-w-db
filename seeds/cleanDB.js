const models = require("../models");
const dataConnection = require("../config/connection");

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db
      .listCollections({
        name: collectionName,
      })
      .toArray();

    if (modelExists.length) {
      await dataConnection.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
