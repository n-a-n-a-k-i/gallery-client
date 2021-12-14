import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountReducer} from "./account/account.reducer";
import {photoReducer} from "./photo/photo.reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    photo: photoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))