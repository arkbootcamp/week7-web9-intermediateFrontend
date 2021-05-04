// INITIAL STATE UNTUK MENYIMPAN DATA DI DALAM STORE BERDASARKAN FEATURE/REDUCERNYA
const initialState = {
  count: 0,
};

// PROSES REDUCER DIJALANKAN SETELAH PROSES ACTION BERDASARKAN TYPE YANG DIKIRIMKAN OLEH ACTION. YANG AKAN MENJALANKAN PROSES SELANJUTNYA
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...initialState,
        count: state.count + 1, // count: 0 + 1
      };
    }
    case "DECREASE": {
      return {
        ...initialState,
        count: state.count - 1,
      };
    }
    case "RESET": {
      return {
        ...initialState,
        count: 0,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default counter;
