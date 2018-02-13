import {  applyMiddleware ,createStore, combineReducers } from 'redux';
import axios from 'axios';
import thunk from "redux-thunk"
// import {dispatch} from 'react-redux-store';
// actions.js
export const getData = (text) => {
	console.log(text)
	return (dispatch) =>{
		if(text!=undefined){
			dispatch({type:"Getting data"})
			axios.get("http://rest.learncode.academy/api/reacttest/"+text)
			.then((response)=>{
				dispatch({type:"Got data", payload:response.data})
			})
		}
	}
} 
export const shit = (state={data: {}}, action) => {
  	switch (action.type) {
		case 'Got data':
		// console.log(action.payload)
			return {...state,data : action.payload,}
		}
		return state;
};
// const reducers = combineReducers(shit)
export const store = createStore(shit,{reponse:{}},applyMiddleware(thunk));

