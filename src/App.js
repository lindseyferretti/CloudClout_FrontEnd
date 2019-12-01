import React, { Component } from 'react';
import {
	BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import './App.scss';
import QueryPage from './Components/QueryPage';
import Home from './Components/Home'

class App extends Component {

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

	render() {
		return (
			<div className="App">
			 <Router>

				 <div><Link to="/">Home</Link></div>
				 <div><Link to="/CreatorsFromCreator">Creator From Creator</Link></div>
				 <div><Link to="/CreatorsFromTag">Creator From Tag</Link></div>
				 <div><Link to="/TagsFromCreator">Tag from Creator</Link></div>
				 <div><Link to="/TagsFromTag">Tag From Tag</Link></div>
				 <Switch>
					<Route exact path="/">
						<Home />
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
