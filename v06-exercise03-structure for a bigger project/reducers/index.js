// step 2.2
function counter(currentState, action) {
  var DEFAULT_STATE = 0;
  if (currentState === undefined) currentState = DEFAULT_STATE;

  switch(action.type) {
    case "INCREMENT":
      return currentState + 1;
    case "DECREMENT":
      return currentState - 1;
  }

  return currentState;
}

function sum(currentState, action) {
  var DEFAULT_STATE = 3;
  
  if (currentState === undefined) currentState = DEFAULT_STATE;

  if (action.type == "SUM") 
    return parseInt(action.a) + parseInt(action.b);

  return currentState;
}

function combineReducer(currentState, action) {
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }
  return nextState;
}


//~end step 2.2