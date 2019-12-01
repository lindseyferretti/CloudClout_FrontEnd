import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

class QueryPage extends Component{
	constructor() {
		super();
		this.state = {textbox: ""}
	}
	
	updateTextBox = (event) => {
		this.setState({textbox: event.target.value});
	}

	makeRequest = async () => {
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
				console.log(json)
				this.setState({response: json.body})
			})
	}

	render(){
        return( 
        <div>
			<Container>
				<h1>{this.props.titleString}</h1>
				<TextField id="outlined-basic" value={this.state.textbox} onChange={this.updateTextBox} variant="outlined" />
				<Button variant="contained" color="primary" onClick={this.makeRequest}>
					Search
				</Button>
				{this.state.response ? 
				<List>
					{this.state.response.map((name) => 
						<ListItem>{name}</ListItem>)}
				</List>
				:
				null
				}
			</Container>
        </div>)
    }
}

export default QueryPage