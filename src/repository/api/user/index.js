const { schemaUser } = require('../../../schema/api/user'),
    { responseHandler, ObjectIdCast } = require('../../../utils');
/**
* @description Register new user
* @author jaffar cardoso <jaffa.cardoso@gmail.com>
* @async
* @function register
* @param {Object} obj - Object contem email e status;
* @returns {Promise.<Object>} The result
* @throws Will throw an error if the argument is null.
*/
exports.register = async (email, senha) => {

    let post = new schemaUser({ email: email, password: senha, status: true });

    return post.save().then(() => {
        return true;
    }).catch(err => {
        throw responseHandler(err);
    });

};


/**
* @description list all user
* @author jaffar cardoso <jaffa.cardoso@gmail.com>
* @async
* @function list
* @returns {Promise.<Object>} The result
* @throws Will throw an error if the argument is null.
*/
exports.list = async () => {
    try {

        return await schemaUser.find().select({ __v: 0 }).exec();
    } catch (error) {
        throw responseHandler(error);
    }
};

/**
* @description list all user
* @author jaffar cardoso <jaffa.cardoso@gmail.com>
* @async
* @function list
* @returns {Promise.<Object>} The result
* @throws Will throw an error if the argument is null.
*/
const findPost = async (id) => {
    try {
        return await schemaUser.aggregate([
            {
                $redact: {
                    $cond: {
                        if: { $eq: ['$_id', ObjectIdCast(id)] },
                        then: '$$PRUNE',
                        else: '$$KEEP'
                    }
                }
            }
        ]).exec();
    } catch (error) {
        throw responseHandler(error);
    }
};

exports.findPost = findPost;
exports.findGet = findPost;

/**
* @description list all user
* @author jaffar cardoso <jaffa.cardoso@gmail.com>
* @async
* @function list
* @returns {Promise.<Object>} The result
* @throws Will throw an error if the argument is null.
*/
exports.remove = async (id) => {
    try {
        return await schemaUser.deleteMany({ '_id': ObjectIdCast(id) }).exec();
    } catch (error) {
        throw responseHandler(error);
    }
};