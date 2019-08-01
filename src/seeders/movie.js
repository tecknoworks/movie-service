var Models = require('../models/movie')

module.exports = {
    seed: async function () {
        await Models.Movie.insertMany([
            {
                title: 'Money heist',
                producer: 'John Thommas',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: 'Thriller',
                contentRating: '+15',
                userRating: 8.5,
                distribution: ['Úrsula Corberó', 'Itziar Ituño', 'Álvaro Morte'],
                posterPath: 'assets/images/mv1.jpg',
                videoPath: 'not-available',
                runtime: 1234
            },
            {
                title: 'Fast and Furious',
                producer: 'John Thommas',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: 'Thriller',
                contentRating: '+15',
                userRating: 8.5,
                distribution: ['Úrsula Corberó', 'Itziar Ituño', 'Álvaro Morte'],
                posterPath: 'assets/images/mv1.jpg',
                videoPath: 'not-available',
                runtime: 1234
            },
            {
                title: 'Money Batman',
                producer: 'John Thommas',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: 'Thriller',
                contentRating: '+15',
                userRating: 8.5,
                distribution: ['Úrsula Corberó', 'Itziar Ituño', 'Álvaro Morte'],
                posterPath: 'assets/images/mv1.jpg',
                videoPath: 'not-available',
                runtime: 1234
            },
            {
                title: 'Money Avatar',
                producer: 'John Thommas',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: 'Thriller',
                contentRating: '+15',
                userRating: 8.5,
                distribution: ['Úrsula Corberó', 'Itziar Ituño', 'Álvaro Morte'],
                posterPath: 'assets/images/mv1.jpg',
                videoPath: 'not-available',
                runtime: 1234
            },
        ])
    }
}