import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import './QueryPage.css';
import loading from "../loading.gif";

class QueryPage extends Component{
	constructor() {
		super();
		this.state = {textbox: ""}
	}
	
	updateTextBox = (event) => {
		this.setState({textbox: event.target.value});
	}


	makeRequest = async () => {
		this.setState({hasMadeRequest: true, loading: true})
		let data = {
			method: "POST",
			mode: 'cors',
			headers: {
      		'Content-Type': 'application/json'
   		 	}
		}
		fetch(`https://mmf13oz3b9.execute-api.us-east-1.amazonaws.com/prod/${this.props.endpoint}${this.state.textbox}`, data)
			.then(response => {
				
				return response.json();
			})
			.then(json => {
				this.setState({response: json, loading: false})
			})
	}

	renderResults = () => {
		if (this.state.loading)
			return (
				<div>
				<div>Loading</div>
				<img alt="loading..." src={loading} />
				</div>
			)
		else if (this.state.response.length === 0)
				return <div>No Results Found</div>
		else
			return (<List className="Results">
						{this.state.response.map((name) => 
						<ListItem>{name}</ListItem>)}
					</List>)
	}

	render(){
        return( 
        <div>
			<Container>
				<h1>{this.props.titleString}</h1>
				<div className="container">
					<TextField className="SearchBox" id="outlined-basic" value={this.state.textbox} onChange={this.updateTextBox} variant="outlined" />
					<div className="SearchButton" onClick={this.makeRequest}>
						Search
					</div>
				</div>
				{this.state.hasMadeRequest ? 
				this.renderResults() 
				:
				null
				}
			</Container>
        </div>)
    }
}

export default QueryPage