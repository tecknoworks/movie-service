const CrudService = require('../services/crud')
const Movie = require('../models/movie').Movie
const MovieService = CrudService(Movie)
const Mapper = require('../helpers/mapper')

module.exports = {
    getAllMoviesCtrl: async function (req, res) {
        try {
            let movieList = await MovieService.getAll()
            for (var i = 0; i < movieList.length; i++) {
                movieList[i] = await Mapper.populateMovie(movieList[i])
            }
            res.send(movieList)
        } catch (error) {
            res.send(error.message)
        }

    },
    getMovieByIdCtrl: async function (req, res) {
        try {
            let movie = await MovieService.getById(req.params.id);
            let movieObj = await Mapper.populateMovie(movie);
            res.send(movieObj)
        } catch (error) {
            res.send(error.message)
        }

    },
    insertMovieCtrl: async function (req, res) {
        try {
            let movie = await await MovieService.insert(req.body);
            let movieObj = await Mapper.populateMovie(movie);
            res.send(movieObj)
        } catch (error) {
            res.send(error.message)
        }

    },
    deleteMovieCtrl: async function (req, res) {
        try {
            res.send(await MovieService.delete(req.params.id))
        } catch (error) {
            res.send(error.message)
        }

    }
}