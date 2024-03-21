import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer, verificationReducer } from "./reducers/AuthReducer";
import {categoryReducer} from "./reducers/CategoryReducer"
import {storeReducer} from "./reducers/StoreReducer"
import { productReducer } from "./reducers/ProductReducer";
import { orderReducer } from "./reducers/OrderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  verification : verificationReducer,
  category: categoryReducer,
  store: storeReducer,
  product: productReducer,
  order: orderReducer
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
