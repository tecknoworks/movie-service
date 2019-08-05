var Models = require('../models/movie')
const faker = require('faker')
const axios = require('axios')

module.exports = {
    seed: async function () {
        await Models.Movie.deleteMany()

        var response1 = await axios.get('http://localhost:3001/details/genre/all');
        var genreList= Array.from(response1.data);
        
        var response2 = await axios.get('http://localhost:3001/details/actor/all');
        var actorList= Array.from(response2.data);

        
        var response3 = await axios.get('http://localhost:3001/details/content-rating/all');
        var contentRatingList= Array.from(response3.data);

        var response4 = await axios.get('http://localhost:3001/details/producer/all');
        var producerList= Array.from(response4.data);

        for(var i =0; i<10;i++){
            Models.Movie.create( 
                {
                    title: faker.name.title(),
                    description: faker.lorem.paragraphs(2,'.'),
                    producer: producerList[Math.floor(faker.random.number(producerList.length-1))].id,
                    releaseDate: faker.date.past(),
                    createdAt: faker.date.recent(1),
                    genre: genreList[Math.floor(faker.random.number(genreList.length-1))].id,
                    contentRating: contentRatingList[Math.floor(faker.random.number(contentRatingList.length-1))].id,
                    userRating: faker.random.number(10),
                    actorList: [ 
                        actorList[Math.floor(faker.random.number(actorList.length-1))].id,
                        actorList[Math.floor(faker.random.number(actorList.length-1))].id,
                        actorList[Math.floor(faker.random.number(actorList.length-1))].id
                    ],
                    poster: "assets/images/mv"+(Math.floor(faker.random.number(3))+1).toString()+".jpg",
                    video: 'no-avaiable',
                    runtime: Math.floor(faker.random.number(10000))

                }
            )
        }
    }
}