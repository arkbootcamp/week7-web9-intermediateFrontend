const initialState = {
  data: {}, // kita gunakan untuk menyimpan data user ketika sudah berhasil login
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": //pending = prosesnya sedang dijalankan
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "LOGIN_FULFILLED": //fulfilled = proses yang akan dijalankan ketika berhasil
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "LOGIN_REJECTED": //rejected = proses yang akan dijalankan ketika gagal
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
        msg: "",
      };
    default:
      return state;
  }
};

export default auth;
