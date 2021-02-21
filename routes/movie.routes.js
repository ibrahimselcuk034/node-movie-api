const express = require('express');
const router = express.Router();
//Model
const MovieModel = require('../models/Movie')

//GET ALL MOVIES (with find method)
router.get('/', (req, res) => {
    MovieModel.find()
        .then((movieList) => {res.json(movieList) })
        .catch((err)=>{res.json(err) })
})

//GET A MOVIE (with findById method)
// router.get('/:movieid', (req, res) => {
//     MovieModel.findById(req.params.movieId)
//         .then((movieList) => {res.json(movieList) })
//         .catch((err)=>{res.json(err) })
// })

//GET A MOVIE : .../api/movies/123 
router.get('/:movieId', (req, res,next) => {
    MovieModel.findById(req.params.movieId)
        .then((movieList) => {
            if (movieList == null) { next({ message: "The movie was not found.", code: 99 }); }
            res.json(movieList);
        })
        .catch((errorMsg) => {
            { next({ message: "The movie was not found. (catch)", code: 99 }); }
            res.json(errorMsg);
        })
        });



//POST
router.post('/', function (req, res) {
    // const movie = new MovieModel({
    //     title : req.body.title,
    //     imdb_score:req.body.imdb_score,
    //     category:req.body.category,
    //     country:req.body.country,
    //     year:req.body.year
    // })
    const movie = new MovieModel(req.body);
    // movie.save((err, data) => {
    //     if (err) { res.json(err); }
    //     res.json(data);
    // });
    const promise = movie.save();
    promise.then((data) => {res.json(data) })
            .catch((err) => {res.json(err) });
})



module.exports = router;