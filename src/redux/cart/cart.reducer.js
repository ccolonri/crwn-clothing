import { cartActionsTypes } from "./cart.types";
import {addItemToCart, removeItemFromCart} from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionsTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionsTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:  addItemToCart([...state.cartItems], action.payload)
            }
        case cartActionsTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromCart([...state.cartItems], action.payload)
            }
        case cartActionsTypes.CLEAR_ITEM_FROM_CART:
            return{ 
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case cartActionsTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
} 

export default cartReducer;