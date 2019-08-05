const axios = require('axios').default

const foreignModels=['actor', 'actorList', 'genre','genreList', 'contentRating', 'contentRatingList', 'producer', 'producerList'];

module.exports= {
    populateMovie: async function(movieObj){
        let idMap={}
        for(property in movieObj){
            if(foreignModels.includes(property)){
                idMap[property]=movieObj[property]
            }
        }
        let response = await axios.post('http://localhost:3001/details/populate/map',idMap)
        let result =response.data
        for(property in movieObj){
            if(foreignModels.includes(property)){
                movieObj[property]=result[property];
            }
        }
        return movieObj
    }
}