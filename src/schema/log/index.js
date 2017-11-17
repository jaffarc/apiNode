/**
 * group of all shemas api.
 * @module documents/Schema
 * @requires profile
 * @requires user
 */
module.exports = async (dblog) => {
    await require('./access')(dblog);
};