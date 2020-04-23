import {combineReducers} from 'redux';
import initialState from './state';

const user = (state=initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.value
    case 'LOGOUT':
      return action.value
    default:
      return state
  }
}

const questions = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS':
      return action.value;
    default:
      return state;
  }
}

const answerOptions = (state=initialState, action) => {
  switch(action.type){
    case 'FETCH_ANSWERS':
      return action.value;
    default:
      return state;
  }
}

const answerSelected = (state=initialState, action) => {
  switch(action.type){
    case 'ANSWER_SELECTED':
        default:
      return state
  }
}

export default combineReducers({user, questions, answerOptions, answerSelected});