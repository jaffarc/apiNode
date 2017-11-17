const { responseHandler, ObjectIdCast } = require('../../../utils');
/**
* @description Register new user
* @author jaffar cardoso <jaffa.cardoso@gmail.com>
* @async
* @function register
* @param {Object} obj - Object contem email e status;
* @returns {Promise.<Object>} The result
* @throws Will throw an error if the argument is null.
*/
exports.register = async (email) => {
    let user = global.db.model('user');
    let post = new user({ email: email, status: true });

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
        let user = global.db.model('user');
        return await user.find().select({ __v: 0 }).exec();
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
exports.findPost = async (id) => {
    try {
        let user = global.db.model('user');
        return await user.find({ _id: ObjectIdCast(id) }).select({ __v: 0 }).exec();
    } catch (error) {
        throw responseHandler(error);
    }
};