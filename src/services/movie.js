const Movie = require('../models/movie')

const uploadFile = require('../helpers/upload_file');
const deleteFile = require('../helpers/delete_file');

const assetsServiceUrl = "http://localhost:3002/assets";
const videoServiceUrl = "http://localhost:3003/videos";

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
                //image upload
                var imageBuffer =  files.poster.data;
                imageBuffer.name= files.poster.name;

                var uploadImageUrl = `${assetsServiceUrl}/image/upload`

                var imageUploadResponse = await uploadFile(uploadImageUrl, {key: 'image', value: imageBuffer});
                movie.poster = imageUploadResponse == null ? null : imageUploadResponse.imageFileName;

                //video upload
                var videoBuffer =  files.video.data;
                videoBuffer.name =  files.video.name;

                var uploadVideoWithPosterUrl =`${videoServiceUrl}/upload-with-poster`

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

            var deleteImageUrl = `${assetsServiceUrl}/image/delete`;
            var deleteVideoUrl = `${videoServiceUrl}/delete`;

            await deleteFile(deleteImageUrl, {key: 'imageFileName', value: movie.poster});
            await deleteFile(deleteImageUrl, {key: 'imageFileName', value: movie.videoPoster});
            await deleteFile(deleteVideoUrl, {key: 'videoFileName', value: movie.video});

            return movie.toObject()
        }
}
