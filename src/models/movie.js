const mongoose = require('mongoose');

module.exports = {
    Movie: mongoose.model('Movie',
        {
            title: String,
            producer: String,
            description: String,
            releaseDate: Date,
            genre: String,
            contentRating: String,
            userRating: Number,
            distribution: [String],
            posterPath: String,
            videoPath: String,
            runtime: Number
        }
    )
};