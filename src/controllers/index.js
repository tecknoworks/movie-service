const Service = require('../services/index')

module.exports= {
    getAllMoviesCtrl: async function(request, response){   
        response.send( await Service.getAllMovies())
    }
};