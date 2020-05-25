import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

// persist config for the persistReducer
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // persists the reducers we want to. Passed in as string. 
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);