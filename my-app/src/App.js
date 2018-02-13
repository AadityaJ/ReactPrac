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
			loc:'tweets'
		};
		this.handleChange = this.handleChange.bind(this)
	}
	componentWillMount() {
    this.props.getData()  // Uncomment when onLoad is used
  }
	handleChange(event){
		this.props.getData(this.state.loc)
	}
  	render() {
    	return (
      	<div >
      		<button > Get me </button>
			{(this.props.data != undefined)?console.log(this.props.data["2"].text):''}
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
