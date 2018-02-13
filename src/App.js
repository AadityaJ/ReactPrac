import React, {
  Component,
} from 'react';
import { connect } from 'react-redux';

import {
	getData,
} from './redux';

// App.js
export class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			text:'',
			gotData: false,
		};
		this.handleChange = this.handleChange.bind(this)
	}
	componentWillMount() {
    	this.props.getData()
  }
	handleChange(event){
		if(!this.state.gotData){
			this.props.getData("tweets")
			this.state.gotData = true
		}else{
			
		}
	}
  	render() {
    	return (
      	<div onLoad = {this.handleChange()}>
			{(this.props.data != undefined)?console.log(this.props.data["0"].text):''}
      	</div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state) => ({
	data: state.data,
});

const mapDispatchToProps = {
	// final: (comments)=>finalText(comments),
	getData: (id)=>getData(id),
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
