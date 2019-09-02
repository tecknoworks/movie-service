const MovieController=require('../controllers/index').MovieController;
const validateToken = require('../helpers/validate_token');
module.exports=function(router){
    router.get('/all', validateToken, MovieController.getAllMoviesCtrl );
    router.get('/:id', validateToken, MovieController.getMovieByIdCtrl );
    router.post('/', MovieController.insertMovieCtrl );
    router.delete('/delete', MovieController.deleteMovieCtrl );
    
    return router
}