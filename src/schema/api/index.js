/**
 * group of all shemas api.
 * @module documents/Schema
 * @requires profile
 * @requires user
 */
module.exports = async (db) => {
    await require('./user')(db);
};