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
    },
    addHistoryRecordToList: async function(movieList, userId){
        let response = await axios.get(`http://localhost:3005/history/user-id/${userId}/screenplay-type/movie`)
        let result = response.data
        for(var i in movieList){
            if(Object.keys(result).includes(`${movieList[i].id}`)){
                movieList[i].historyRecord= result[movieList[i].id]
            }
        }
        return movieList
    },
    getHistoryRecord: async function(movie, userId, movieId){
        try {
            let response = await axios.get(`http://localhost:3005/history/user-id/${userId}/screenplay-id/${movieId}/screenplay-type/movie`)
            if(response.status==200){
                movie.historyRecord=response.data
            }
            return movie
        } catch (error) {
            return movie
        }
        
    }

}