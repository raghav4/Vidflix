import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
	state = {
		data: { username: "", password: "" },
		errors: {}
	};
	schema = {
		username: Joi.string()
			.label("Username")
			.required(),
		password: Joi.string()
			.label("Password")
			.required()
	};
	doSubmit = () => {
		console.log("Submitted");
	};
	render() {
		return (
			<React.Fragment>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
				</form>
			</React.Fragment>
		);
	}
}

export default LoginForm;
