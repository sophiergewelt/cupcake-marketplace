/*****************************************************************
 * REDUCER to access the store
 ********************************************************************/
let reducer = function(state, action) {
  if (action.type === "login-success") {
    return { ...state, loggedIn: true }; // ...state copy the state and only changes what's after the coma
  }

  //this refers to the type of the object up in the LOGIN a TYPE is just a string we attach to an object to help define it.
  return state; // Needed because react-redux calls your reducer with an @@init action
};

export default reducer;
