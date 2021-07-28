const axios = require('axios').default
const config = require("../config");

const foreignModels=['actor', 'actorList', 'genre','genreList', 'contentRating', 'contentRatingList', 'producer', 'producerList'];

module.exports= {
    populateMovieList: async function(screenplayList){
        let screenplaysDetails = {}
        let idList=[];
        screenplayList.forEach((screenplay)=>{
            let details={};
            for(property in screenplay){
                if(foreignModels.includes(property)){
                    details[property]=screenplay[property];
                }
            }   
            screenplaysDetails[screenplay.id]=details;
            idList.push(screenplay.id);
        });

        let response = await axios.post(`${config.screenplayDetailsServiceUrl}/populate/list`,screenplaysDetails);

        let result = response.data;
        
        let param={list: JSON.stringify(idList)};
        let ratingResponse=await axios.get(`${config.ratingServiceUrl}/averages`,{params: param});
        let ratingsMap = ratingResponse.data;
        screenplayList.forEach((screenplay, index)=>{
            for(property in screenplay){
                if(foreignModels.includes(property)){
                    screenplayList[index][property]=result[screenplay.id][property];
                }
            }
            screenplayList[index].userRating=ratingsMap[screenplay.id];
        });
    },
    populateMovie: async function(movieObj){
        let details={}
        for(property in movieObj){
            if(foreignModels.includes(property)){
                details[property]=movieObj[property]
            }
        }    
        let response = await axios.post(`${config.screenplayDetailsServiceUrl}/populate/map`,details)
        
        let result =response.data
        
        for(property in movieObj){
            if(foreignModels.includes(property)){
                movieObj[property]=result[property];
            }
        }
        return movieObj
    },
    addHistoryRecordToList: async function(movieList, userId){
        let response = await axios.get(`${config.historyServiceUrl}/user-id/${userId}/screenplay-type/movie`)
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
            let response = await axios.get(`${config.historyServiceUrl}/user-id/${userId}/screenplay-id/${movieId}/screenplay-type/movie`)
            if(response.status==200){
                movie.historyRecord=response.data
            }
            return movie
        } catch (error) {
            return movie
        }
        
    }

}