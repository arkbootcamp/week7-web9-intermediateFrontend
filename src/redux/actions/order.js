export const saveOrder = (data) => {
  return {
    type: "SAVE_ORDER",
    data: data,
  };
};

export const resetOrder = () => {
  return {
    type: "RESET_ORDER",
  };
};

// =============================
export const addCart = (data) => {
  return {
    type: "ADD_CART",
    data: data,
  };
};
