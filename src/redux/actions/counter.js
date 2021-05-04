export const increaseCounter = () => {
  return {
    // type = PENAMAAN FEATURE
    // payload = UNTUK MENJALANKAN PROSES AXIOS
    type: "INCREASE", // TYPE JUGA DIGUNAKAN UNTUK PROSES DI DALAM REDUCER
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREASE",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};
