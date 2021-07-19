const initialState = {
  orderData: {},
  cart: [],
};

// cart = [
//   {
//     movieId: 1,
//     qty: 2
//   }
// ]

const order = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ORDER": {
      return {
        ...state,
        orderData: action.data,
      };
    }
    case "RESET_ORDER": {
      return {
        ...state,
        orderData: {},
      };
    }
    case "ADD_CART": {
      const data = [...state.cart, action.data];
      const addedItem = data.find(
        (element) => element.movieId === action.data.movieId
      );
      const exsistedItem = state.cart.find(
        (element) => action.data.movieId === element.movieId
      );

      if (exsistedItem) {
        addedItem.qty += 1;
        return {
          ...state,
        };
      }

      return {
        ...state,
        cart: data,
      };
    }
    case "INCREMENT_CART": {
      let incrementItem = state.data.find(
        (element) => element.movieId === action.data.movieId
      );
      incrementItem.qty += 1;
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default order;
