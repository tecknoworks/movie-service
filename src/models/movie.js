const mongoose = require('mongoose');
const schemaBuilder = require('../helpers/schema_builder').schemaBuilder;

module.exports = {
    Movie: mongoose.model('movie', schemaBuilder({
        title: String,
        producer: String,
        description: String,
        releaseDate: Date,
        createdAt: Date,
        genre: String,
        contentRating: String,
        userRating: Number,
        actorList: [String],
        poster: String,
        video: String,
        runtime: Number
    })
    )
};