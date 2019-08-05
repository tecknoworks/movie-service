const MovieController=require('../controllers/index').MovieController;

module.exports=function(router){
    router.get('/all', MovieController.getAllMoviesCtrl );
    router.get('/:id', MovieController.getMovieByIdCtrl );
    router.post('/', MovieController.insertMovieCtrl );
    router.delete('/:id', MovieController.deleteMovieCtrl );
    return router
}