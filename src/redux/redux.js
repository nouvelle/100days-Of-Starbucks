import { createStore } from 'redux';

//init state
const initState = {
  yScroll: 0,
  postData: [],
  lastDataId: ""
}

// reducer
function reducer(state = initState, action) {
  switch(action.type){
    case "SET_Y_SCROLL":
      return {...state, yScroll: action.yScroll };
    case "SET_POSTDATA":
      if(JSON.stringify(state.postData) == JSON.stringify(action.postData)){
        return {...state, postData: action.postData };
      } else {
        if(action.postData[action.postData.length - 1].id === 1114912749975265300) action.postData = action.postData.slice(0, action.postData.length-1);
        return {...state, postData: state.postData.concat(action.postData) };
      }
    case "SET_LAST_DATA_ID":
      // 1114912749975265300 : 一番最初のPost
      if(action.lastDataId === 1114912749975265300) {
        return {...state, lastDataId: "" }
      } else {
        return {...state, lastDataId: action.lastDataId };
      }
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

export default store;