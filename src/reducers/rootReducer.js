import { combineReducers } from 'redux';
import cartReducer  from './cart';
import inventoryReducer from './inventory';


const rootReducer = combineReducers({cart: cartReducer, inventory: inventoryReducer});

export default rootReducer;
