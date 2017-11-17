const {Schema} = require('mongoose'),
    ObjectId = Schema.ObjectId;

/**
 * @desc Definition of Profile Schema
 * @name used
 * @memberof documents/Schema#
 * @property {string} email - Email is used as a login
 * @property {ObjectId} profile - Profile Schema Reference
 * @property {boolean} status - Flag indicating whether the document is active or not
*/
const UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: Boolean,
        required: false,
        default: 1
    }
}, {
    collection: 'user',
    timestamps: true
});

module.exports = (db) => db.model('user', UserSchema);