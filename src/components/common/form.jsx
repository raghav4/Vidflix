import React, { Component } from "react";
import Joi, { errors } from "joi-browser";
import Input from "./input";
import Select from "./select";
class Form extends Component {
	state = {
		data: {},
		errors: {}
	};
	validate = () => {
		const options = {
			abortEarly: false
		};
		const { error } = Joi.validate(this.state.data, this.schema, options);
		if (!error) return null;
		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};
	handleSubmit = e => {
		e.preventDefault();

		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;
		this.doSubmit();
	};
	handleChange = ({ currentTarget: input }) => {
		console.log("Handle Change!!");
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);

		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		console.log(input.value);
		this.setState({ data, errors });
	};

	renderButton(label) {
		return (
			<button disabled={this.validate()} className='btn btn-primary'>
				{label}
			</button>
		);
	}
	renderDropdown() {
		return (
			<div className='input-group mb-3'>
				<select className='custom-select' id='inputGroupSelect03'>
					<option selected>Choose...</option>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</select>
			</div>
		);
	}
	renderInput(name, label, value, type = "text") {
		const { data, errors } = this.state;
		return (
			<Input
				name={name}
				label={label}
				value={data[name]}
				onChange={this.handleChange}
				error={errors[name]}
				type={type}
			/>
		);
	}
	renderSelect(name, label, options) {
		const { data, error } = this.state;
		return (
			<Select
				name={name}
				value={data[name]}
				label={label}
				options={options}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}
}

export default Form;
