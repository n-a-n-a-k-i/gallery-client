import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountReducer} from "./account/account.reducer";
import {photoReducer} from "./photo/photo.reducer";
import {userReducer} from "./user/user.reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    photo: photoReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
