import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // eslint-disable-next-line no-case-declarations
      const newItem = { ...action.payload, quantity: 1 };

      return [...state, newItem];
    case "REMOVE_ITEM":
      return state.filter((item) => item._id !== action.payload._id);

    case "CLEAR_CART":
      return [];

    case "INCREMENT_QUANTITY":
      // Increment quantity of item in cart
      // eslint-disable-next-line no-case-declarations
      const incrementedCart = state.map((item) =>
        item._id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      return incrementedCart;
    case "DECREMENT_QUANTITY":
      // Decrement quantity of item in cart
      // eslint-disable-next-line no-case-declarations
      const decrementedCart = state.map((item) =>
        item._id === action.payload._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return decrementedCart;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Function to handle quantity increment
  const handleIncrement = (item) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: item });
  };

  // Function to handle quantity decrement
  const handleDecrement = (item) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
