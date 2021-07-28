const MovieService = require('../services/movie')
const Mapper = require('../helpers/mapper')

module.exports = {
    getAllMoviesCtrl: async function (req, res) {
        try {
            let movieList = await MovieService.getAll()

            await Mapper.populateMovieList(movieList);
            
            if(req.userId!=null){
                movieList= await Mapper.addHistoryRecordToList(movieList, req.userId)
            }
            res.send(movieList)
        } catch (error) {
            console.log(error);
            res.send(error.message)
        }
    },
    getMovieByIdCtrl: async function (req, res) {
        try {
            let movie = await MovieService.getById(req.query.id);
            let movieObj = await Mapper.populateMovie(movie);
            
            if(req.userId!=null){
                movieObj= await Mapper.getHistoryRecord(movieObj, req.userId, movieObj.id)
            }
            res.send(movieObj)
        } catch (error) {
            res.send(error.message)
        }
    },
    insertMovieCtrl: async function (req, res) {
        try {           
            var movieMap = req.body;

            //TODO: make a middleware to pares all lists from a form
            movieMap.actorList = JSON.parse(movieMap.actorList);

            let movie = await MovieService.insert(movieMap);
            
            movie = await MovieService.saveMediaFiles(movie, req.files);
        
            let movieObj = movie.toObject(); 
            
            movieObj = await Mapper.populateMovie(movieObj);
            
            res.send(movieObj)
        } catch (error) {
            console.log(error);
            
            res.status(400).send(error.message)
        }
    },
    deleteMovieCtrl: async function (req, res) {
        try {
            var movie = await MovieService.delete(req.query.movieId);

            res.send()
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}