import React, { Component } from 'react';
import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import './App.css';
import QueryPage from './Components/QueryPage';
import clout from './clout.png';
import Rclout from './Rclout.png';

class App extends Component {

	constructor() {
		super()
		this.state = {image: clout}
	}

	cfcdata = {
		endpoint: 'get-creator-from-creator?creator=',
		titleString: 'Find other creators that do similar things to a creator you like', 
	}
	cftdata = {
		endpoint: 'get-creator-from-tag?tag=',
		titleString: 'Find creators who often use a specific tag',	
	}
	tfcdata = {
		endpoint: 'get-tag-from-creator?creator=',
		titleString: 'Find out which tags a specific creator most often uses',
	}
	tftdata = {
		endpoint: 'get-tags-from-tag?tag=',
		titleString: 'Find tags that are generally assiciated with a specific tag',
	}

	marqueeProps = {className: "Marquee", truespeed:"true", scrolldelay: "30", direction: "right", scrollamount: "7", behavior: "alternate", onfinish: this.flipImage}

	flipImage = () => {
		this.setState({image: Rclout});
	}

	render() {
		return (
			<div className="App">
				<marquee {...this.marqueeProps}>
					<div className="MQItem">CLOUD</div>
					<div className="MQItem"><img alt="CloudClout mascot" src={this.state.image}></img></div>
					<div className="MQItem">CLOUT</div>
				</marquee>
				<Router>
					<div className="HeaderNav">
						<Link className="NavItem" to="/CreatorsFromCreator">Creator From Creator</Link>
						<Link className="NavItem" to="/CreatorsFromTag">Creator From Tag</Link>
						<Link className="NavItem" to="/TagsFromCreator">Tag from Creator</Link>
						<Link className="NavItem" to="/TagsFromTag">Tag From Tag</Link>
					</div>
					<Switch>
						<Route exact path="/">
							<div />
						</Route>
						<Route path="/CreatorsFromCreator">
							<QueryPage {...this.cfcdata}/>
						</Route>
						<Route path="/CreatorsFromTag">
							<QueryPage {...this.cftdata}/>
						</Route>
						<Route path="/TagsFromCreator">
							<QueryPage {...this.tfcdata}/>
						</Route>
						<Route path="/TagsFromTag">
							<QueryPage {...this.tftdata}/>
						</Route>
					</Switch>
			 	</Router> 
			</div>
		);
	}
}

export default App;
