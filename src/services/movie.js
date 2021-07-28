const Movie = require('../models/movie')

const uploadFile = require('../helpers/upload_file');
const deleteFile = require('../helpers/delete_file');
const config = require("../config");

module.exports =  {
        getAll: async function () {
            let resultList = await Movie.find()
            return resultList.map(doc => doc.toObject())
        },
        getById: async function (id) {
            let result = await Movie.findById(id);
            return result.toObject();
        },
        saveMediaFiles: async function(movie, files){

            if(Object.keys(files).length!=0){
                //portrait image upload
                var portraitImageBuffer =  files.poster.data;
                portraitImageBuffer.name= files.poster.name;

                var uploadImageUrl = `${config.assetServiceUrl}/image/upload`

                var portraitImageUploadResponse = await uploadFile(uploadImageUrl, {key: 'image', value: portraitImageBuffer});
                movie.poster = portraitImageUploadResponse == null ? null : portraitImageUploadResponse.imageFileName;

                //landscape
                var landscapeImageBuffer =  files.landscapePoster.data;
                landscapeImageBuffer.name= files.landscapePoster.name;

                var uploadImageUrl = `${config.assetServiceUrl}/image/upload`

                var landscapeImageUploadResponse = await uploadFile(uploadImageUrl, {key: 'image', value: landscapeImageBuffer});
                movie.landscapePoster = landscapeImageUploadResponse == null ? null : landscapeImageUploadResponse.imageFileName;

                //video upload
                var videoBuffer =  files.video.data;
                videoBuffer.name =  files.video.name;

                var uploadVideoWithPosterUrl =`${config.videoServiceUrl}/upload-with-poster`

                var videoUploadResponse = await uploadFile(uploadVideoWithPosterUrl, {key: 'video', value: videoBuffer});                

                if(videoUploadResponse){
                    movie.video = videoUploadResponse.video.videoFileName;
                    movie.runtime = videoUploadResponse.video.runtime;
                    movie.videoPoster = videoUploadResponse.imageFileName;
                }
                var updatedMovie= await movie.save()

                return updatedMovie;
            }else{
                return movie;
            }
        },
        insert: async function (MovieMap) {
            MovieMap.createdAt=new Date()
            let result = await Movie.create(MovieMap)
            return result;
        },
        delete: async function (id) {
            let movie = await Movie.findByIdAndDelete(id)

            var deleteImageUrl = `${config.assetServiceUrl}/image/delete`;
            var deleteVideoUrl = `${config.videoServiceUrl}/delete`;

            await deleteFile(deleteImageUrl, {key: 'imageFileName', value: movie.poster});
            await deleteFile(deleteImageUrl, {key: 'imageFileName', value: movie.videoPoster});
            await deleteFile(deleteImageUrl, {key: 'imageFileName', value: movie.landscapePoster});
            await deleteFile(deleteVideoUrl, {key: 'videoFileName', value: movie.video});

            return movie.toObject()
        }
}
