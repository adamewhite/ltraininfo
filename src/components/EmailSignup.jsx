import React, { Component } from 'react';
import '../stylesheets/EmailSignup.css';

const INITIAL_STATE = {
  signupEmail: '',
  error: null,
};

class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const node = document.getElementsByName(`${e.target.name}`)[0];
    const targetedLabel = document.getElementById(`${e.target.name}Signup`);

    if (node.value !== '') {
      targetedLabel.style.opacity = 1;
    } else {
      targetedLabel.style.opacity = 0;
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // const { email } = this.state;

    // auth.doPasswordReset(email)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }));
    //   })
    //   .catch(error => {
    //     this.setState({ error: error });
    //   });
  }

  render() {
    const {
      email,
      error
    } = this.state;

    console.log("state", this.state);

    const isInvalid = email === '';

    return (
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="email" id="signupEmailSignup">Email Address</label>
              <input
                type="text"
                value={this.state.signupEmail}
                name="signupEmail"
                onChange={this.handleChange}
                placeholder="Enter Your Email Address"
              />
            </li>
            <li>
              <button
                type="submit"
                onSubmit={this.handleSubmit}
                disabled={isInvalid}>
                  Submit
              </button>
            </li>
            <li>
            { error && <p>{error.message}</p> }
            </li>
          </ul>
        </form>
    );
  }
}

export default EmailSignup;


