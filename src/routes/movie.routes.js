const { Router } = require("express");
const {createMovie} = require("../controllers/movie.controllers");
const movieRouter = Router();

movieRouter.post("/movies", createMovie);
// movieRouter.get("/movies", getMovie);

module.exports = movieRouter;