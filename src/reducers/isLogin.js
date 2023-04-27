const isLoginReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLELOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
