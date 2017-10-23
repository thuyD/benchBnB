import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
  }

  //never defined what processForm is

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const submit = this.props.formType === "signup" ? "Sign Up" : "Log In";
    const other = this.props.formType === "signup" ? "login" : "signup";
    const errors = this.props.errors.map((error, idx) => {
      return <li key ={idx}>{error}</li>;
    });

    return (
      <div>
        <ul>
          {errors}
        </ul>

        <Link to={`/${other}`}>{other}</Link>

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.handleChange('username')}/>
          </label>

          <label>Password
            <input type="text" value={this.state.password} onChange={this.handleChange('password')}/>
          </label>

          <button>{submit}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
