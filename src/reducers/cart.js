import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actionTypes';

const INITIAL_STATE = localStorage.getItem('userCart')
? JSON.parse(localStorage.getItem('userCart'))
: [];

export default function cartReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return [...state].filter((item) => item.productId !== action.payload);
    case INCREMENT_QUANTITY: 
      return [...state].map((item) => {
        if (item.productId === action.payload){
          return {productId: item.productId,
          quantity: item.quantity + 1}
        }
        return item;
      })
    case DECREMENT_QUANTITY: 
    return [...state].map((item) => {
      if (item.productId === action.payload && item.quantity > 1){
        return {productId: item.productId,
        quantity: item.quantity - 1}
      }
      return item;
    })
    default:
      return state;
  }
}


/*
Cart model:
[
  {
    productId: varchar,
    quantity: num
  }
]
*/
