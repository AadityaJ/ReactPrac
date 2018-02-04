import React, { Component } from 'react';
import './App.css';

class MainApp extends Component {
    constructor(props){
        super(props);
        const currBengaluruDate = new Date();
        const getoffset=()=>{
            switch(this.props.cityName){
                case "Bengaluru": return 0;
                case "slc": return -3780000;
                case "nyc": return -4500000;
                default: return 0;
            }
        }
        this.state = {
            buttonTog: false,
            timeCity: new Date(currBengaluruDate.getTime()+getoffset()),
        }
    }
    handleClick(){
        this.setState({
            buttonTog:true,
        })
    }
    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),1000    
        );
    }
    tick(){
        if(this.state.buttonTog){
            const currBengaluruDate = new Date();
            const getoffset=()=>{
                switch(this.props.cityName){
                    case "Bengaluru": return 0;
                    case "slc": return -3780000;
                    case "nyc": return -4500000;
                    default: return 0;
                }
            }
            this.setState({
                timeCity: new Date(currBengaluruDate.getTime()+getoffset()),
            });
        }   
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Toggle buttons</h1>
        </header>
        <p className="App-intro">
            <button onClick={()=>this.handleClick(this)}> Click me to launch time</button>
        </p>
        <div className="grid-container">
            <div className="grid-item">
                Time in {this.props.cityName} is : {(this.state.buttonTog)?this.state.timeCity.toLocaleTimeString():' '}
            </div>
        </div>
      </div>
    );
  }
}
export default MainApp;