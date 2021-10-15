import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountReducer} from "./reducer/account.reducer";
import {userReducer} from "./reducer/user.reducer";
import {todoReducer} from "./reducer/todo.reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))