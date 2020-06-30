import { createStore } from 'redux';

//init state
const initState = {
  yScroll: 0
}

// reducer
function reducer(state = initState, action) {
  switch(action.type){
    case "SET_Y_SCROLL":
      return {...state, yScroll: action.yScroll };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

export default store;