import React, { Component } from 'react';
import '../stylesheets/About.css';

class GettingAround extends Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
	}

	handleShow(reference) {
		this.refs[reference].scrollIntoView({block: 'start', behavior: 'smooth'});
	}

  render() {
    return (
    	<section className="section">
					<h1 className="section__heading">How am I possibly going to get anywhere?</h1>

					<ul className="jump__list">
						<li className="jump__item" onClick={() => this.handleShow("bridge")}>
							<p className="jump__title">Williamsburg Bridge</p>
						</li>
						<li className="jump__item" onClick={() => this.handleShow("14th")}>
							<p className="jump__title">14th Street Corridor</p>
						</li>
						<li className="jump__item" onClick={() => this.handleShow("ferry")}>
							<p className="jump__title">East River Ferry</p>
						</li>
						<li className="jump__item" onClick={() => this.handleShow("bikes")}>
							<p className="jump__title">Bicycling & Walking</p>
						</li>
					</ul>

					<h2 className="section__subheading" ref="bridge">Williamsburg Bridge</h2>
					
					<p className="section__p">The Williamsburg Bridge will serve as the major connection for L subway shuttle buses.</p>

					<p className="section__p">High Occupancy Vehicle (HOV-3) restrictions will be added to the Williamsburg Bridge during peak hours.</p>

					<p className="section__p">NYC DOT is also designing temporary bus lanes that provide transit priority across much of the shuttle bus corridors.</p> 

					<img className="section__image" src={require('../assets/images/LTrainMitigation-Bridge.jpg')} alt="L Train Mitigation - Williamsburg Bridge" />

					<h2 className="section__subheading" ref="14th">14th Street Corridor</h2>

					<p className="section__p">The core of 14th Street (3rd to Ninth Avenues eastbound and 3rd to 8th Avenues westbound) will serve as an exclusive “busway” with peak hour restrictions. Bus lanes will be added past both sides of the busway as well.</p>

					<p className="section__p">An upgraded Select Bus Service (SBS) treatment on 14th Street will bring bus lanes, expanded sidewalks to the corridor and It will also include temporary bus bulbs, or sidewalk extensions into the street, such that a bus can stay in its traffic lane to discharge and pick up passengers, instead of having to pull over to the curb.</p> 

					<p className="section__p">NYC DOT will also add new pedestrian only space along Union Square West from 14th to 15th Streets and 16th to 17th Streets.</p>

					<img className="section__image" src={require('../assets/images/LTrainMitigation-14th.jpg')} alt="L Train Mitigation - 14th Street" />

					<h2 className="section__subheading" ref="ferry">East River Ferry</h2>

					<p className="section__p">The MTA is currently working with NYC EDC on the implementation of a new temporary ferry route connecting North Williamsburg to Stuyvesant Cove on East 20th St in Manhattan, which will be the terminus of the M14 SBS.</p>

					<p className="section__p">Proposed hours of service:</p>

					<p className="section__p">Weekdays/Sunday: 6 AM – midnight</p>
					<p className="section__p">Friday/Saturday: 6 AM – 2 AM</p>

					<p className="section__p">In rush hours, there will be 8 boats per hour per direction, carrying up to 1,200 passengers per hour per direction.</p>

					<p className="section__p">Fares will be integrated with the M14 SBS and M23 SBS.</p>

					<img className="section__image" src={require('../assets/images/LTrainMitigation-Ferry.png')} alt="L Train Mitigation - Ferry" />


					<h2 className="section__subheading" ref="bikes">Bicycling & Walking</h2>

					<p className="section__p">DOT will also improve cycling connections to the Stuyvesant Cove ferry landing and East River Greenway, as well as adding a protected bike link this spring on Delancey Street between Allen Street and the Williamsburg Bridge. NYC DOT will work with Motivate on its Citi Bike capacity to help service inconvenienced subway users, such as increased bike inventories and valet services to help move riders.</p>

					<p className="section__p">Grand Street, Brooklyn DOT is looking to make major changes to this major street that will serve as a bus and bicycle corridor to the Williamsburg Bridge.</p>

					<p className="section__p">Pedestrian Enhancements Near Subway Stations
					DOT will also add new crosswalks, bike parking and pedestrian space to the Myrtle and Broadway corridors near the J subwayM subwayZ subway subway lines. With G subway train ridership expected to grow dramatically, DOT will improve crossings around the Nassau Avenue G subway train stop.</p>
	      </section>
      );
  }
}

export default GettingAround;




