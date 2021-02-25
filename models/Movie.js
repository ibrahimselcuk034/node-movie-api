const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
        director_id: Schema.Types.ObjectId,
        // director_id: { type: Schema.Types.ObjectId}
        title: {
            type: String,
            required: [true, "The field `{PATH}` is required."],
            maxlength: [50, "The field `{PATH}` must be less than ({MAXLENGTH}) characters."],
            minlength: [5, "The field `{PATH}` must be greater than ({MINLENGTH}) characters."]
        },
        category: {
            type: String,
            maxlength: [30, "The field `{PATH}` must be less than ({MAXLENGTH}) characters."],
            minlength: [1, "The field `{PATH}` must be greater than ({MINLENGTH}) characters."]
        },
        country: {
            type: String,
            maxlength: [50, "The field `{PATH}` must be less than ({MAXLENGTH}) characters."],
            minlength: [3, "The field `{PATH}` must be greater than ({MINLENGTH}) characters."]
        },
        year: {
            type: Number,
            min: 1850,
            max:2100
        },
        imdb_score: {
            type: Number,
            min: 0,
            max:10
        },
        createdAt: {type: Date, default: Date.now}
    }
);


module.exports = mongoose.model('movie', MovieSchema) 
