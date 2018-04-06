import React, { Component } from 'react';
import Countdown from './Countdown';
import '../stylesheets/Landing.css';

class Landing extends Component {
  render() {
    return (
    		<div>
  				<aside>
  		   	 	<Countdown />
  		   	</aside>
    			<article>
    				<img src={require('../assets/images/ltrainmap.png')} alt="ltrainmap" />
    			</article>
       	</div>
      );
  }
}

export default Landing;