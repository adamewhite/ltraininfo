import React, { Component } from 'react';
import '../stylesheets/About.css';

class About extends Component {
  render() {
    return (
	      <section className="section"> 
	      	<h1 className="section__heading section__heading--no-margin-top">Why does the L need to close?</h1>
	      	<p className="section__p">In 2012, Superstorm Sandy flooded the 92-year-old tubes of the Canarsie Tunnel through which the L runs, damaging vital infrastructure and systems.</p>

					<p className="section__p">The damage Sandy left in its wake significantly shortened the useful life of the tunnel.  The tubes are currently safe, but a full reconstruction of the tunnel is necessary.</p>

					<p className="section__p">The most devastating damage occurred in the duct banks, concrete structures that provide a protected pathway for the miles of cables and circuits necessary for the communication, power, and safety of the trains.</p> 

					<p className="section__p">The salt water also caused damage to the tube structure, signal and other electrical equipment, and accelerated the deterioration of track and track ties.</p>

					<h1 className="section__heading section__heading--no-margin-top">But isn't the L still too busy to close?</h1>

					<p className="section__p">Over the last decade, the L Subway Line has experienced tremendous growth and emerged as one of the system’s busiest subway lines.</p> 

					<p className="section__p">Since 1990, ridership on the L Subway Line has more than tripled. It has quintupled at the Bedford Av Station alone.</p>

					<p className="section__p">On average, 400,000 riders use the L everyday, and 225,000 of them use the Canarsie Tunnel to get between Brooklyn and Manhattan.</p>

					<div className="image__container">

						<img className="image--14th" src={require('../assets/images/LTrainUsage-14th.jpg')} alt="L Train Usage - Rush Hour" />					

						<img className="image--brooklyn" src={require('../assets/images/LTrainUsage-Brooklyn.jpg')} alt="L Train Usage - Rush Hour" />

					</div>

					<p className="section__p">Despite this tremendous uptick in ridership, <a className="section__a" href="https://www.nytimes.com/2017/11/18/nyregion/new-york-subway-system-failure-delays.html" target="_blank">the subway infrastructure has been grossly underfunded since the Giuliani administration</a>.</p>

				</section>
      );
  }
}

export default About;




