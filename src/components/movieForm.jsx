import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovies, saveMovie } from "../services/fakeMovieService";
class MovieForm extends Form {
	state = {
		data: { title: "", password: "", genreId: "", numberInStock: "" },
		genres: [],
		errors: {}
	};
	schema = {
		_id: Joi.string(),
		title: Joi.string()
			.label("Title")
			.required(),
		password: Joi.string()
			.label("Password")
			.min(5)
			.required(),
		genreId: Joi.string()
			.label("Genre")
			.required(),
		numberInStock: Joi.number()
			.min(0)
			.max(100)
			.label("Number in Stock")
			.required(),
		rate: Joi.number()
			.min(0)
			.max(10)
			.required()
	};
	componentDidMount() {
		const genres = getGenres();
		this.setState({ genres });

		const movieId = this.props.match.params.id;
		if (movieId === "new") return;

		const movie = getMovies(movieId);
		if (!movie) return this.props.history.replace("/not-found"); // push -> Infinite Loop

		this.setState({ data: this.mapToViewModel(movie) });
	}
	mapToViewModel(movie) {
		return {
			_id: movie._id,
			title: movie.title,
			genreId: movie.genre._id,
			numberInStock: movie.numberInStock,
			dailyRentalRate: movie.dailyRentalRate
		};
	}
	doSubmit = () => {
		saveMovie(this.state.data);
		console.log("Movie form submitted!!");

		this.props.history.push("/movies");
	};
	render() {
		const { match, history } = this.props;
		return (
			<React.Fragment>
				<h1>Movie Form {match.params.id}</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderSelect("genreId", "Genre", this.state.genres)};
					{this.renderInput("password", "Password", "password", "password")}
					{this.renderInput("numberInStock", "Number In Stock", "numberInStock")}
					{this.renderInput("rate", "Rate", "rate")}
					{this.renderButton("Save")}
				</form>
			</React.Fragment>
		);
	}
}

export default MovieForm;
