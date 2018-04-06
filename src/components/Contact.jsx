import React, { Component } from 'react';
import ContactForm from './ContactForm';
import EmailSignup from './EmailSignup';
import '../stylesheets/Contact.css';

class Contact extends Component {
  render() {
    return (
  			<div className="container">
  				<article className="article">
  					<p className="container__p">Contact us with any questions, intel or insights.</p>
  		   	 	<ContactForm />
  		   	</article>
    			<aside className="aside">
    				<p className="container__p">Sign up below for updates as we receive them. They won't be often or spammy.</p>
    				<EmailSignup />
    			</aside>
  			</div>
      );
  }
}

export default Contact;