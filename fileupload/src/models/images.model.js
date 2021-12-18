const { Schema, model } = require('mongoose');

const imagesSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    pictures: [{type: String, required: true}],
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model('images', imagesSchema);
