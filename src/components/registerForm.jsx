import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class RegisterForm extends Form {
	state = {
		data: { username: "", password: "", name: "" },
		errors: {}
	};
	schema = {
		username: Joi.string()
			.email()
			.label("Username")
			.required(),
		password: Joi.string()
			.min(5)
			.label("Password")
			.required(),
		name: Joi.string().required()
	};
	doSubmit = () => {
		console.log("User Registered!");
	};
	render() {
		return (
			<React.Fragment>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name", "name")}
					{this.renderButton("Register")}
				</form>
			</React.Fragment>
		);
	}
}

export default RegisterForm;
