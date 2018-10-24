const { Schema } = require('mongoose'),
    conn = require('../../../connection'),
    ObjectId = Schema.ObjectId;

/**
* @desc Definition of Profile Schema
* @name used
* @memberof documents/Schema#
* @property {string} email - Email is used as a login
* @property {ObjectId} profile - Profile Schema Reference
* @property {boolean} status - Flag indicating whether the document is active or not
*/
const accessSchema = new Schema(
    {
        user: {
            type: ObjectId,
            required: false
        },
        status: {
            type: Boolean,
            required: false,
            default: 1
        }
    }, {
        collection: 'access',
        timestamps: true
    }
);

exports.SchemaAccss = conn.model('access', accessSchema);