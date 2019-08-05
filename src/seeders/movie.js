var Models = require('../models/movie')

module.exports = {
    seed: async function () {
        await Models.Movie.deleteMany()
        await Models.Movie.insertMany([
            {
                title: 'Money heist',
                producer: '5d443172000f984454785121',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: '5d4432ba03a82512e4236f59',
                contentRating: '5d443172000f984454785120',
                userRating: 8.5,
                actorList: ['5d443170000f984454785117', '5d443170000f984454785119', '5d443170000f98445478511c'],
                poster: 'assets/images/mv1.jpg',
                video: 'not-available',
                runtime: 1234
            },
            {
                title: 'Fast and Furious',
                producer: '5d443172000f984454785123',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: '5d4432ba03a82512e4236f5a',
                contentRating: '5d443172000f98445478511e',
                userRating: 8.5,
                actorList: ['5d443170000f984454785119', '5d443170000f984454785118'],
                poster: 'assets/images/mv1.jpg',
                video: 'not-available',
                runtime: 1234
            },
            {
                title: 'Batman',
                producer: '5d443172000f984454785124',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: '5d4432ba03a82512e4236f5c',
                contentRating: '5d443172000f98445478511d',
                userRating: 8.5,
                actorList: ['5d443170000f984454785118'],
                poster: 'assets/images/mv1.jpg',
                video: 'not-available',
                runtime: 1234
            },
            {
                title: 'Avatar',
                producer: '5d443172000f984454785122',
                description: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
                releaseDate: Date('7/7/2017'),
                genre: '5d4432ba03a82512e4236f59',
                contentRating: '5d443172000f98445478511f',
                userRating: 8.5,
                actorList: ['5d443170000f984454785119'],
                poster: 'assets/images/mv1.jpg',
                video: 'not-available',
                runtime: 1234
            },
        ])
    }
}