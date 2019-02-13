let reducer = function(state, action) {
  switch (action.type) {
    case "setCupcakes":
      return { ...state, cupcakes: action.cupcakes };
    case "login-success":
      return { ...state, loggedIn: true };
    case "logout-success":
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export { reducer };
