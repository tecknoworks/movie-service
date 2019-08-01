const Models = require('../models/movie')

module.exports={
    getAllMovies: async function(){
        try {
            var movieList = await Models.Movie.find()
            return movieList
        } catch (error) {
            throw(error)
        }
    }
}