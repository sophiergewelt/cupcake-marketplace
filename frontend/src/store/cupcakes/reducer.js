let reducer = function(state, action) {
  switch (action.type) {
    case "setCupcakes":
      return { ...state, cupcakes: action.cupcakes };
    case "login-success":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};

export { reducer };
