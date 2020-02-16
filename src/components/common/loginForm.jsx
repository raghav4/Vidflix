import React, { Component } from 'react';
import Input from '../common/input';
class LoginForm extends Component {
  state = {
    account: { username: '', password: '' }
  };
  username = React.createRef();
  handleSubmit = e => {
    e.preventDefault();

    console.log('Submitted');
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='username'
            label='Username'
            value={account.username}
            onChange={this.handleChange}
            type='text'
          />
          <Input
            name='password'
            label='Password'
            type='password'
            value={account.password}
            onChange={this.handleChange}
          />
          <button className='btn btn-primary'>Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
