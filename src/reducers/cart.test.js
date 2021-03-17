import cartReducer from './cart';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

describe('cartReducer tests', ()=> {

  it('should add item to cart state', () => {
    const action = {
      type: ADD_TO_CART,
      payload: {
        productId: "47314fa1-ae56-4eae-80be-af6691145951",
        quantity: 1
      }
    }
    const cartState = cartReducer([], action);

    expect(cartState).toEqual([
      {
        productId: "47314fa1-ae56-4eae-80be-af6691145951",
        quantity: 1
      }
    ])
  })

  it('should remove item to cart state', () => {
    const action = {
      type: REMOVE_FROM_CART,
      payload: "47314fa1-ae56-4eae-80be-af6691145951"
    }
    
    const cartState = cartReducer([
      {
        productId: "47314fa1-ae56-4eae-80be-af6691145951",
        quantity: 1
      },
      {
        productId: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
        quantity: 1
      }
    ], action);

    expect(cartState).toEqual([
      {
        productId: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
        quantity: 1
      }
    ])
  })

})
