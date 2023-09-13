import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    cont = existingCartItemIndex =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    return state.items[existingCartItemIndex];
  } else {
    updatedItems = state.items.concat({
      ...action.item,
      amount: Math.min(action.item.amount, action.item.quantity),
    });
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
};

if (action.type === "REMOVE") {
  const existingCartItemIndex = state.items.findIndex(
    (item) => item.id === action.id
  );
  const existingItem = state.items[existingCartItemIndex];
  const updatedTotalAmount = state.totalAmount - existingItem.price;
  if (existingItem.amount === 0) {
    updatedItems = state.items.filter((item) => item.id !== action.id);
  } else {
    const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
    updatedItems = [...state.items];
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}></CartContext.Provider>;
};

export default CartProvider;
