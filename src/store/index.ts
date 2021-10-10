import {applyMiddleware, combineReducers, createStore} from "redux";
import {AccountReducer} from "./reducer/account.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    account: AccountReducer
})

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))