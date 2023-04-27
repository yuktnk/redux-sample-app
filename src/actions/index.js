export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const increment2 = (number) => {
  return {
    type: "INCREMENT2",
    payload: number,
  };
};

export const toggleLogin = () => {
  return {
    type: "TOGGLELOGIN",
  };
};
