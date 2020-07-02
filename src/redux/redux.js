import { createStore } from 'redux';

//init state
const initState = {
  yScroll: 0,
  postData: {}
}

// reducer
function reducer(state = initState, action) {
  switch(action.type){
    case "SET_Y_SCROLL":
      return {...state, yScroll: action.yScroll };
    case "SET_POSTDATA":
      return {...state, postData: action.postData };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

export default store;