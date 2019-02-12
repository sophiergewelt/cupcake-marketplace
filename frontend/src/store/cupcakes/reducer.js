let reducer = function(state, action) {
  switch (action.type) {
    case "setCupcakes":
      return { ...state, cupcakes: action.cupcakes };
    default:
      return state;
  }
};

export { reducer };
