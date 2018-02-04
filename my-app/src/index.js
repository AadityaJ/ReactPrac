import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import MainApp from './CityClock';
const ShortBengaluru = ({ match }) => {
    return <MainApp cityName="Bengaluru" offset={match.params.num} x={match.params.x} y={match.params.y}/>
}
const ShortSLC = ({ match }) => {
    return <MainApp cityName="SLC" offset={match.params.num}x={match.params.x} y={match.params.y}/>
}
const ShortNYC = ({ match }) => {
    return <MainApp cityName="NYC" offset={match.params.num}x={match.params.x} y={match.params.y}/>
}
ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/bengaluru/:num/x/:x/y/:y" component={ShortBengaluru}/>
            <Route path="/slc/:num/x/:x/y/:y" component={ShortSLC}/>
            <Route path="/nyc/:num/x/:x/y/:y" component={ShortNYC}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root')
);
registerServiceWorker();
